
import { NextRequest, NextFetchEvent, NextResponse } from 'next/server';
import {getSession, useSession} from "next-auth/react";
import {getToken} from "next-auth/jwt";
import {redirect} from "next/dist/server/api-utils";


export async function middleware( req: NextRequest, ev: NextFetchEvent ) {

    if (req.page.name === '/api/entries') return NextResponse.next();
    const session = await getToken({req, secret: process.env.NEXTAUTH_SECRET});
    const { pathname, origin } = req.nextUrl
    if ( !session || session.user.role=="doctor") {
        // return res.status(400).json({ message: 'El id no es válido ' + id })
        return new Response( JSON.stringify({ message: 'You dont have access'}), {
            status: 403,
            headers: {
                'Content-Type':'application/json'
            }
        });
    }

    if(! session.user.filled_information){
        return NextResponse.redirect(`${origin}/profile/setup`)
    }
    return NextResponse.next();
}

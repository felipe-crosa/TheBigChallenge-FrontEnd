
import { NextRequest, NextFetchEvent, NextResponse } from 'next/server';
import {getToken} from "next-auth/jwt";


export async function middleware( req: NextRequest, ev: NextFetchEvent ) {

    if (req.page.name === '/api/entries') return NextResponse.next();
    const session = await getToken({req, secret: process.env.NEXTAUTH_SECRET});
    const { pathname, origin } = req.nextUrl

    if ( !session || session.user.role=="patient") {
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

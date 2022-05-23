import {Grid} from "@mui/material";
import {AnonymousCard} from "./SubmissionCards/AnonymousCard";
import React, {FC, ReactNode} from "react";

type Props = {
    children?: ReactNode
}

export const CardGrid: FC<Props> = (props: Props) => {
    return (
        <Grid container rowSpacing={6} columnSpacing={2}>
            {props.children}
        </Grid>)
}
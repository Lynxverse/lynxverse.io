import React from "react";

export type IButton = {
    title: string
    color?: string
    style: string
    link?: string
    iconChildren?: React.ReactNode
    icon?: boolean
};

/**
 * @author Stéphane LaFlèche <stephane.l@vanillaforums.com>
 * @copyright 2009-2018 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import React from "react";
import classNames from "classnames";
import { t } from "@library/application";

const currentColorFill = {
    fill: "currentColor",
};

export function rightChevron(className?: string) {
    const title = `>`;
    return (
        <svg
            className={classNames("icon", "icon-chevronRight", className)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <title>{title}</title>
            <path
                fill="currentColor"
                d="M15.4955435,6.92634039 C15.4955435,6.82589384 15.4509005,6.73660802 15.3839362,6.66964366 L14.8258998,6.11160728 C14.7589354,6.04464291 14.6584889,6 14.5692031,6 C14.4799172,6 14.3794707,6.04464291 14.3125063,6.11160728 L9.11160728,11.3125063 C9.04464291,11.3794707 9,11.4799172 9,11.5692031 C9,11.6584889 9.04464291,11.7589354 9.11160728,11.8258998 L14.3125063,17.0267989 C14.3794707,17.0937632 14.4799172,17.1384061 14.5692031,17.1384061 C14.6584889,17.1384061 14.7589354,17.0937632 14.8258998,17.0267989 L15.3839362,16.4687625 C15.4509005,16.4017981 15.4955435,16.3013516 15.4955435,16.2120657 C15.4955435,16.1227799 15.4509005,16.0223334 15.3839362,15.955369 L10.9977702,11.5692031 L15.3839362,7.18303712 C15.4509005,7.11607276 15.4955435,7.01562621 15.4955435,6.92634039 Z"
                transform="matrix(-1 0 0 1 25 .5)"
            />
        </svg>
    );
}

export function leftChevron(className?: string) {
    const title = `<`;
    return (
        <svg
            className={classNames("icon", "icon-chevronLeft", className)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <title>{title}</title>
            <path
                d="M14.9,7.7l-4.4,4.4,4.4,4.4a.5.5,0,0,1,0,.6l-.6.6a.5.5,0,0,1-.6,0L8.5,12.5a.5.5,0,0,1,0-.6l5.2-5.2a.5.5,0,0,1,.6,0s.676.543.7.7A.325.325,0,0,1,14.9,7.7Z"
                style={currentColorFill}
            />
        </svg>
    );
}

export function close(className?: string, noPadding: boolean = false) {
    const title = t("Close");
    const viewBox = noPadding ? "0 0 16 16" : "0 0 24 24";
    const transform = noPadding ? "translate(-4 -4)" : "";
    return (
        <svg
            className={classNames("icon", "icon-close", className)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
            aria-hidden="true"
        >
            <title>{title}</title>
            <path
                transform={transform}
                fill="currentColor"
                d="M12,10.6293581 L5.49002397,4.11938207 C5.30046135,3.92981944 4.95620859,3.96673045 4.69799105,4.22494799 L4.22494799,4.69799105 C3.97708292,4.94585613 3.92537154,5.29601344 4.11938207,5.49002397 L10.6293581,12 L4.11938207,18.509976 C3.92981944,18.6995387 3.96673045,19.0437914 4.22494799,19.3020089 L4.69799105,19.775052 C4.94585613,20.0229171 5.29601344,20.0746285 5.49002397,19.8806179 L12,13.3706419 L18.509976,19.8806179 C18.6995387,20.0701806 19.0437914,20.0332695 19.3020089,19.775052 L19.775052,19.3020089 C20.0229171,19.0541439 20.0746285,18.7039866 19.8806179,18.509976 L13.3706419,12 L19.8806179,5.49002397 C20.0701806,5.30046135 20.0332695,4.95620859 19.775052,4.69799105 L19.3020089,4.22494799 C19.0541439,3.97708292 18.7039866,3.92537154 18.509976,4.11938207 L12,10.6293581 Z"
            />
        </svg>
    );
}

export function check(className?: string) {
    const title = `✓`;
    return (
        <svg
            className={classNames("icon", "icon-check", className)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <title>{title}</title>
            <polygon fill="currentColor" points="5,12.7 3.6,14.1 9,19.5 20.4,7.9 19,6.5 9,16.8" />
        </svg>
    );
}

export function dropDownMenu(className?: string) {
    const title = `…`;
    return (
        <svg
            className={classNames("icon", "icon-dropDownMenu", className)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <title>{title}</title>
            <circle cx="5.7" cy="12" r="2" fill="currentColor" />
            <circle cx="18.3" cy="12" r="2" fill="currentColor" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
    );
}

export function newFolder(className?: string, title: string = t("New Folder")) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classNames("icon", "icon-dropDownMenu", className)}
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <title>{title}</title>
            <path
                d="M12.25,11.438a.5.5,0,0,0-1,0v2.75H8.5a.5.5,0,0,0,0,1h2.75v2.75a.5.5,0,0,0,1,0v-2.75H15a.5.5,0,0,0,0-1H12.25Z"
                fill="currentColor"
            />
            <path
                d="M21,7.823H13.825L12.457,4.735a.5.5,0,0,0-.457-.3H3a.5.5,0,0,0-.5.5v16a.5.5,0,0,0,.5.5H21a.5.5,0,0,0,.5-.5V8.323A.5.5,0,0,0,21,7.823Zm-.5,12.615H3.5v-15h8.175l1.368,3.087a.5.5,0,0,0,.457.3h7Z"
                fill="currentColor"
            />
        </svg>
    );
}

export function categoryIcon(className?: string) {
    const title = t("Folder");
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classNames("icon", "icon-categoryIcon", className)}
            viewBox="0 0 14.25 12.75"
            aria-hidden="true"
        >
            <title>{title}</title>
            <path
                d="M9.369,3.164H14.75a.375.375,0,0,1,.375.375V13a.375.375,0,0,1-.375.375H1.25A.375.375,0,0,1,.875,13V1A.375.375,0,0,1,1.25.625H8a.375.375,0,0,1,.343.223ZM1.625,1.375v11.25h12.75V3.914H9.125a.375.375,0,0,1-.343-.223L7.756,1.375Z"
                transform="translate(-0.875 -0.625)"
                fill="currentColor"
            />
        </svg>
    );
}

export function selectedCategory(className?: string) {
    const title = `✓`;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classNames("icon", "icon-selectedCategory", className)}
            viewBox="0 0 16.8 13"
            aria-hidden="true"
        >
            <title>{title}</title>
            <polygon
                points="12.136 3.139 13.25 4.253 6.211 11.292 2.75 7.83 3.863 6.717 6.211 9.064 12.136 3.139"
                fill="currentColor"
            />
        </svg>
    );
}

export function fileGeneric(className?: string) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
            className={classNames("icon", "icon-fileGeneric", className)}
            aria-hidden="true"
        >
            <title>{t("Document")}</title>
            <rect width="18" height="18" rx="1" ry="1" style={{ fill: "#4c4c4c" }} />
            <path
                d="M9.616,6.558,13.1,10.045a1.869,1.869,0,0,1,.093,2.688,1.849,1.849,0,0,1-2.688-.094L4.764,6.9c-.1-.1-.99-1.05-.186-1.854s1.749.083,1.854.186l5.189,5.189a.483.483,0,0,1,.01.732.5.5,0,0,1-.754.007L7.948,8.226l-.556.556,2.931,2.931A1.311,1.311,0,1,0,12.177,9.86L6.987,4.67a2.054,2.054,0,0,0-2.965-.185A2.054,2.054,0,0,0,4.207,7.45L9.953,13.2a2.624,2.624,0,1,0,3.706-3.707L10.172,6Z"
                style={{ fill: "#fff" }}
            />
        </svg>
    );
}

export function fileWord(className?: string) {
    const textFill = "#fff";
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
            className={classNames("icon", "icon-fileWord", className)}
            aria-hidden="true"
        >
            <title>{t("Word Document")}</title>
            <rect width="18" height="18" rx="1" ry="1" fill="#2b5599" />
            <polygon
                style={{ fill: "#fff" }}
                points="6.133 13.543 4 5 5.365 5 6.707 11.07 6.73 11.07 8.389 5 9.326 5 10.979 11.07 11.002 11.07 12.35 5 13.715 5 11.582 13.543 10.498 13.543 8.869 7.385 8.846 7.385 7.211 13.543 6.133 13.543"
            />
        </svg>
    );
}

export function fileExcel(className?: string) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
            className={classNames("icon", "icon-fileExcel", className)}
            aria-hidden="true"
        >
            <title>{t("Excel Document")}</title>
            <rect width="18" height="18" rx="1" ry="1" fill="#2f7d32" />
            <polygon
                style={{ fill: "#fff" }}
                points="9.334 10.361 7.459 13.543 6 13.543 8.613 9.166 6.164 5 7.629 5 9.334 7.965 11.039 5 12.498 5 10.055 9.166 12.668 13.543 11.203 13.543 9.334 10.361"
            />
        </svg>
    );
}

export function filePDF(className?: string) {
    const textFill = "#fff";
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
            className={classNames("icon", "icon-filePDF", className)}
            aria-hidden="true"
        >
            <title>{t("PDF Document")}</title>
            <rect width="18" height="18" rx="1" ry="1" style={{ fill: "#ff3934" }} />
            <path
                style={{ fill: "#fff" }}
                d="M2,13.767V5H3.884a2.815,2.815,0,0,1,.911.135,1.75,1.75,0,0,1,.714.481,1.889,1.889,0,0,1,.444.806,5.053,5.053,0,0,1,.123,1.25,6.2,6.2,0,0,1-.068,1,2.1,2.1,0,0,1-.289.764,1.851,1.851,0,0,1-.69.671,2.325,2.325,0,0,1-1.133.24h-.64V13.77ZM3.256,6.182v2.98h.6a1.29,1.29,0,0,0,.591-.111.7.7,0,0,0,.308-.308,1.112,1.112,0,0,0,.117-.455c.012-.181.019-.382.019-.6s0-.4-.013-.585a1.254,1.254,0,0,0-.111-.486.7.7,0,0,0-.295-.32,1.163,1.163,0,0,0-.566-.111Zm3.755,7.585V5h1.86a2.159,2.159,0,0,1,1.644.591,2.343,2.343,0,0,1,.56,1.675v4.1a2.446,2.446,0,0,1-.6,1.816,2.356,2.356,0,0,1-1.718.585ZM8.267,6.182v6.4h.579a.931.931,0,0,0,.751-.265,1.279,1.279,0,0,0,.222-.831V7.266a1.323,1.323,0,0,0-.21-.8.891.891,0,0,0-.763-.283Zm3.99,7.585V5H16V6.182H13.513v2.66H15.68v1.182H13.513v3.743Z"
            />
        </svg>
    );
}

import {css} from "styled-components";

export const mobile = (props) => {
    return css`
    @media only sreen and (max-width:380px) {
    ${props}
}
    `;
};

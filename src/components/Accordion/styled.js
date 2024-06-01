import styled from "styled-components"

export const AccordionBox = styled.div`
    $accordion-primary: #E2D8CF;
    $accordion-orange: #C5AC8E;

    color: $accordion-primary;
    margin-bottom: 10px;

    &::before {
        content: "";
        background-color: $accordion-orange;
        position: absolute;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        margin-left: -5px;
        width: 10px;
        height: 100%;
    }

    button {
        outline: none;
        padding: 20px;
        border: none;
        text-align: left;
        width: 100%;
        transition: 0.4s;
        font-size: 20px;
        font-weight: 500;
        background-color: #f5eded;
        font-family: $roboot;
        color: #343a40;
        cursor: pointer;

        &.active,
        &:hover {
            background-color: $accordion-orange;
            color: #C5AC8E;

            .arrow::before,
            .arrow::after {
                background: #fff;
            }
        }
    }

    .accordion-panel {
        padding: 0 18px;
        background-color: white;
        color: #444444;
        overflow: hidden;
        transition: max-height 0.3s ease-in-out;
    }

    .arrow {
        position: absolute;
        top: 30px;
        right: 30px;

        &:before,
        &:after {
            position: relative;
            content: "";
            display: block;
            width: 20px;
            height: 2px;
            background: $accordion-orange;
            transition: 0.3s ease-in-out;
        }

        &:before {
            transform: rotate(45deg);
        }

        &:after {
            left: 13px;
            top: -2px;
            transform: rotate(-45deg);
        }
    }

    &.collapsed {
        .accordion-panel {
            max-height: 0;
        }
    }

    &.uncollapsed {
        .accordion-panel {
            max-height: 500px;
        }

        .arrow::before {
            transform: rotate(-45deg);
        }

        .arrow::after {
            transform: rotate(45deg);
        }
    }
`

export const AccordionButton = styled.button``
export const AccordionPanel = styled.div`
    p {
        padding-top: 0.6em;
        line-height: 1.4rem;
      	color: #212529;
    }
    
`

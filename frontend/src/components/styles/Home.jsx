import styled, { keyframes } from 'styled-components';
import theme from '../utils/Variables';
import HeroBackground from '../../assets/images/hero-background-image.png'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const HomeContainer = styled.div`
animation: ${fadeIn} 1s ease-in;
body {
    background-color: ${theme.colors.backgroundColor3};
}
.hero {
    display: flex;
    flex-direction: column;
    position: relative;
    background: url(${HeroBackground}) center center / cover;
    background-color: ${theme.colors.backgroundColor1};
    margin: 0 -0.5rem;
    @media (min-width: ${theme.breakpoints.up.large}) {
        flex-direction: row;
        justify-content: space-between;
        margin: 0 -8px;
        padding-bottom: ${theme.layout.spaceBetween90};
    }
    &__overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(47,50,144,0.95);
    }
    &__text {
        border-radius: 0.5rem;
        padding: 0.5rem;
        z-index: 2;
        width: 80%;
        margin: auto;
        text-align: center;
        @media (min-width: ${theme.breakpoints.up.large}) {
            padding-top: ${theme.layout.spaceBetween90};
            margin: 0 0 0 ${theme.layout.marginLeftRight};
            width: 30%;
            max-width: 33rem;
            text-align: unset;
            border-radius: 0;
        }
        h1 {
            color: ${theme.colors.white};
            font-size: 1.5rem;
            line-height: 2rem;
            margin-bottom: ${theme.layout.spaceBetween30};
            @media (min-width: ${theme.breakpoints.up.large}) {
                font-size: 2.375rem;
                line-height: 3.2rem;
                text-align: left;
            }
        }
        .subtitle {
            color: ${theme.colors.white};
            font-size: 1rem;
            line-height: 1.625rem;
            font-weight: 200;
            margin-bottom: ${theme.layout.spaceBetween30};
            @media (min-width: ${theme.breakpoints.up.large}) {
                text-align: left;
            }
        }
        .cta-row {
            display: flex;
            justify-content: center;
            @media (min-width: ${theme.breakpoints.up.large}) {
                justify-content: left;
            }
            form {
                display: flex;
                justify-content: center;
                width: 80%;
                @media (min-width: ${theme.breakpoints.up.large}) {
                    justify-content: left;
                }
            }

            input[type="email"] {
                font-size: 0.875rem;
                color: ${theme.colors.paragraph};
                padding: 0.5rem 0.75rem;
                border: 2px ${theme.colors.button} solid;
                border-radius: 4px 0 0 4px;
                width: 65%;

                @media (min-width: ${theme.breakpoints.up.medium}) {
                    padding: 0.75rem 1rem;
                    font-size: 1rem;
                }
            }

            input[type="submit"] {
                font-size: 0.875rem;
                color: ${theme.colors.white};
                background-color: ${theme.colors.button};
                padding: 0.5rem 0.75rem;
                border: 2px ${theme.colors.button} solid;
                border-radius: 0 4px 4px 0;
                margin-left: -5px;

                @media (min-width: ${theme.breakpoints.up.medium}) {
                    padding: 0.75rem 1rem;
                    font-size: 1rem;
                }
            }
        }

    }
    &__image {
        z-index: 2;
        margin: auto;
        max-width: 90%;
        padding-top: ${theme.layout.spaceBetween30};
        @media (min-width: ${theme.breakpoints.up.medium}) {
            max-width: 60%;
        }
        @media (min-width: ${theme.breakpoints.up.large}) {
            max-width: 50%;
            padding-top: ${theme.layout.spaceBetween90};
            margin: none;
        }
        img {
            width: 100%;
        }
    }

}
.benefits-one {
    margin: 0 ${theme.layout.marginLeftRight};
    margin-top: ${theme.layout.spaceBetween90};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: ${theme.breakpoints.up.medium}) {
        flex-direction: row-reverse;
        align-items: center;
    }
    &__image {
        width: 100%;
        margin-bottom: ${theme.layout.spaceBetween20};
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 35%;
            max-width: 43.75rem;
        }
        img {
            width: 100%;
        }
    }
    &__text {
        text-align: left;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 60%;
            max-width: 41.25rem;
        }
        p {
            color: ${theme.colors.paragraph};
            font-size: 1rem;
            line-height: 1.625rem;
            margin-bottom: ${theme.layout.spaceBetween20};
        }
        .four-benefits {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            div {
                width: 48%;
                margin-top: 1rem;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    width: 40%;
                }
                span {
                    font-size: 1.5rem;
                }
                p {
                    margin-top: 0;
                }
                h4 {
                    font-weight: 400;
                    margin: 0.5rem 0;
                }
            }
        }
    }
}
.benefits-two {
    margin: 0 ${theme.layout.marginLeftRight};
    margin-top: ${theme.layout.spaceBetween90};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: ${theme.breakpoints.up.medium}) {
        flex-direction: row;
        align-items: center;
    }
    &__image {
        width: 100%;
        margin-bottom: ${theme.layout.spaceBetween20};
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 60%;
            max-width: 43.75rem;
        }
        img {
            width: 100%;
        }
    }
    &__text {
        text-align: left;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 35%;
            max-width: 41.25rem;
        }
        p {
            color: ${theme.colors.paragraph};
            font-size: 1rem;
            line-height: 1.625rem;
            margin-bottom: ${theme.layout.spaceBetween20};
        }
        .four-benefits {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            div {
                display: flex;
                width: 48%;
                margin: 1.25rem 0;
                span {
                    font-size: 1rem;
                    margin-top: 0.25rem;
                }
                p {
                    margin: 0;
                    margin-left: 0.5rem;
                }
            }
        }
    }
}
.blog {
    margin: 0 ${theme.layout.marginLeftRight};
    margin-top: ${theme.layout.spaceBetween90};
    &__posts {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    &__post {
        display: flex;
        width: 80%;
        min-width: 18.75rem;
        margin: 0 1rem ${theme.layout.spaceBetween30} 0;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 30%;
        }
        .image {
            width: 100%;
            min-width: 6.25rem;
            img {
                width: 100%;
            }
        }
        h4 {
            font-weight: 400;
            margin: 0;
        }
        p {
            color: ${theme.colors.paragraph};
            font-size: 1rem;
            line-height: 1.5rem;
            margin: 0.5rem 0;
        }
        a {
            color: ${theme.colors.paragraph};
            font-size: 1rem;
            text-decoration: none;
            :hover {
                color: ${theme.colors.secondary};
            }
        }
    }
}
`;
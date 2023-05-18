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
    z-index: 1;
    background: url(${HeroBackground}) center center / cover;
    background-color: ${theme.colors.backgroundColor1};
    margin: 0 -0.5rem;
    padding-bottom: ${theme.layout.spaceBetween90};
    @media (min-width: ${theme.breakpoints.up.large}) {
        flex-direction: row;
        justify-content: space-between;
        margin: 0 -8px;
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
.steps-section {
    width: 80%;
    margin: auto;
    text-align: center;
    margin-top: -${theme.layout.spaceBetween90};
    position: relative;
    z-index: 9;
    padding: ${theme.layout.spaceBetween20};
    background-color: ${theme.colors.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.25);
    @media (min-width: ${theme.breakpoints.up.medium}) {
        width: 60%;
    }
    h2 {
        font-weight: bold;
        color: ${theme.colors.titleH2};
        margin-bottom: ${theme.layout.spaceBetween30};
    }
    .steps {
        display: flex;
        justify-content: space-between;
        .step {
            width: 20%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                width: 30%;
            }
            .order {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 30px;
                height: 30px;
                font-size: 1.125rem;
                border-radius: 50%;
                color: ${theme.colors.white};
                background-color: ${theme.colors.primary};
                border: 4px solid ${theme.colors.white};
                box-shadow: 0 0 10px ${theme.colors.primary};
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    width: 50px;
                    height: 50px;
                    font-size: 1.5rem;
                }
            }
            p {
                font-size: 1rem;
                color: ${theme.colors.paragraph}
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 1.25rem;
                }
            }
        }
    }

}
.benefits-one, .benefits-three {
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
            width: 40%;
            max-width: 41.25rem;
        } 
        h2 {
            color: ${theme.colors.titleH2};
        }
        p {
            color: ${theme.colors.paragraph};
            font-size: 1rem;
            line-height: 1.625rem;
            margin-bottom: ${theme.layout.spaceBetween20};
        }
        a {
            color: ${theme.colors.link};
            font-size: 1rem;
            line-height: 1.625rem;
            margin-bottom: ${theme.layout.spaceBetween20};
            text-decoration: none;
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
        flex-direction: row-reverse;
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
            width: 40%;
            max-width: 41.25rem;
        } 
        h2 {
            color: ${theme.colors.titleH2};
        }
        p {
            color: ${theme.colors.paragraph};
            font-size: 1rem;
            line-height: 1.625rem;
            margin-bottom: ${theme.layout.spaceBetween20};
        }
        a {
            color: ${theme.colors.link};
            font-size: 1rem;
            line-height: 1.625rem;
            margin-bottom: ${theme.layout.spaceBetween20};
            text-decoration: none;
        }
    }
}
.cta-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${theme.layout.spaceBetween30} ${theme.layout.marginLeftRight};
    margin: -0.5rem;
    margin-top: ${theme.layout.spaceBetween60};
    background-color: ${theme.colors.primary};
    h2 {
        text-align: center;
        color: ${theme.colors.white};
        margin-bottom: ${theme.layout.spaceBetween30};
    }
    .cta-row {
        display: flex;
        justify-content: center;
        margin-bottom: ${theme.layout.spaceBetween30};
        form {
            display: flex;
            justify-content: center;
            width: 80%;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                width: 40%;
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
.testimonials-section {
    display: flex;
    flex-direction: column;
    padding: ${theme.layout.spaceBetween30} ${theme.layout.marginLeftRight};
    margin: -0.5rem;
    background-color: ${theme.colors.primary};
    h2 {
        text-align: center;
        color: ${theme.colors.white};
        margin-bottom: ${theme.layout.spaceBetween30};
    }
    .testimonials {
        display: flex;
        padding: ${theme.layout.spaceBetween20};
        overflow-x: auto;
        -ms-overflow-style: none; /* Internet Explorer 10+ */
        scrollbar-width: none; /* Firefox */
        
        &::-webkit-scrollbar { /* Chrome, Safari, Edge */
            display: none;
        }
        .testimonial {
            display: flex;
            flex-direction: column;
            flex-shrink: 0;
            flex-grow: 0;
            margin-left: ${theme.layout.spaceBetween20};
            padding: ${theme.layout.spaceBetween30};
            width: 200px;
            background-color: ${theme.colors.white};
            border-radius: 10px;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                width: 300px;
            }
            &.active {
                box-shadow: 0 0 20px ${theme.colors.white};
            }
            &__header {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin-bottom: ${theme.layout.spaceBetween20};
                .customer {
                    &-info {
                        display: flex;
                        align-items: center;
                        img {
                            width: 50px;
                            height: 50px;
                            border-radius: 50%;
                            margin-right: 5px;
                        }
                    }
                    &-name {
                        font-size: 0.875rem;
                        font-weight: bold;
                        color: ${theme.colors.paragraph};
                        margin: 0;
                        margin-bottom: 4px;
                    }
                    &-company {
                        font-size: 0.875rem;
                        color: ${theme.colors.paragraph};
                        margin: 0;
                    }
                }
                .coma {
                    img {
                        width: 20px;
                    }
                }
            }
            &__body{
                font-size: 0.875rem;
                color: ${theme.colors.paragraph};
                margin: 0;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 1rem;
                }
            }
        }
    }
    .testimonial-directions {
        margin-top: ${theme.layout.spaceBetween20};
        margin-bottom: ${theme.layout.spaceBetween30};
        display: flex;
        justify-content: center;
        align-items: center;
        .bi-chevron-left {
            color: ${theme.colors.white};
            font-size: 1rem;
            cursor: pointer;
            margin-right: 1rem;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1.25rem;
            }
        }
        .bi-chevron-right {
            color: ${theme.colors.white};
            font-size: 1rem;
            cursor: pointer;
            margin-left: 1rem;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1.25rem;
            }
        }
        .testimonial {
            &-circles {
                display: flex;
                justify-content: center;
                .bi {
                    font-size: 0.875rem;
                    color: ${theme.colors.white};
                    margin-right: 4px;
                    cursor: pointer;
                    @media (min-width: ${theme.breakpoints.up.medium}) {
                        font-size: 1.125rem;
                    }
                }
            }
        }
    }
}
`;
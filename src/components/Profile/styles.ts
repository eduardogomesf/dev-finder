import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin-top: 1.5rem;
    padding: 3rem;

    background-color: ${({ theme }) => theme.colors.card};
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);

    border-radius: 15px;
`

export const ProfileHeader = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 2.25rem;

    > img {
        width: 117px;
        height: 117px;
        border-radius: 50%;
    }

    > div {
        flex: 1;

        div {
            display: flex;
            align-items: center;
            justify-content: space-between;

            strong {
                font-weight: 700;
                font-size: ${({ theme }) => theme.fonts["3xl"]};
                line-height: 39px;

                color: ${({ theme }) => theme.colors.darkText};
            }

            > time {
                font-weight: 400;
                font-size: ${({ theme }) => theme.fonts.md};
                line-height: 22px;
                text-align: right;

                color: ${({ theme }) => theme.colors.lightText};

                @media (max-width: 768px) {
                    display: none;
                }
            }
        }

        a {
            font-weight: 400;
            font-size: ${({ theme }) => theme.fonts.xl};
            line-height: 24px;

            color: ${({ theme }) => theme.colors.active};

            &:hover {
                transition: color 0.5s;
                color: ${({ theme }) => theme.colors.activeHighlight};
            }
        }

        > time {
            margin-top: 10px;

            font-weight: 400;
            font-size: ${({ theme }) => theme.fonts.md};
            line-height: 22px;

            color: ${({ theme }) => theme.colors.lightText};

            display: none;

            @media (max-width: 768px) {
                display: block;
            }
        }

        > p {
            margin-top: 20px;

            font-weight: 400;
            font-size: ${({ theme }) => theme.fonts.md};
            line-height: 25px;

            color: ${({ theme }) => theme.colors.text};
            opacity: 0.75;

            @media (max-width: 768px) {
                display: none;
            }
        }
    }
`

export const Bio = styled.p`
    margin-top: 1.25rem;

    font-weight: 400;
    font-size: ${({ theme }) => theme.fonts.md};
    line-height: 25px;

    color: ${({ theme }) => theme.colors.text};
    opacity: 0.75;

    display: none;

    @media (max-width: 768px) {
        display: block;
    }
`

export const ProfileInfo = styled.div`
    max-width: 480px;
    width: 100%;
    margin-top: 2rem;
    margin-left: auto;
    padding: 1rem 2rem;

    background-color: ${({ theme }) => theme.colors.background};
    
    border-radius: 10px;

    display: flex;
    align-items: center;
    gap: 6.25rem;

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;


        span {
            font-weight: 400;
            font-size: ${({ theme }) => theme.fonts.sm};
            line-height: 19px;

            color: ${({ theme }) => theme.colors.text};
        }

        strong {
            font-weight: 700;
            font-size: ${({ theme }) => theme.fonts["2xl"]};
            line-height: 33px;
            text-transform: uppercase;

            color: ${({ theme }) => theme.colors.title};
        }
    }

    @media (max-width: 768px) {
        max-width: 100%;
    }
`

export const ProfileSocials = styled.div`
    max-width: 480px;
    width: 100%;
    margin-top: 2.25rem;
    margin-left: auto;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 3.75rem;
    grid-row-gap: 1.25rem;

 
`

type SocialProps = {
    isDisabled?: boolean
}

export const Social = styled.div<SocialProps>`
    display: flex;
    align-items: center;
    gap: 1rem;

    opacity: ${({ isDisabled }) => isDisabled ? 0.5 : 1};
    pointer-events: ${({ isDisabled }) => isDisabled ? 'none' : 'initial'};

    svg {
        width: 20px;
        height: 20px;

        color: ${({ theme }) => theme.colors.text};
    }

    strong {
        font-weight: 400;
        font-size: ${({ theme }) => theme.fonts.md};
        line-height: 22px;

        color: ${({ theme }) => theme.colors.text};
    }

    a {
        font-weight: 400;
        font-size: ${({ theme }) => theme.fonts.md};
        line-height: 22px;

        color: ${({ theme }) => theme.colors.text};

        &:hover {
            text-decoration: underline;
        }
    }
`
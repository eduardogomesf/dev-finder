import { Buildings, Link, MapPin, TwitterLogo } from "phosphor-react";
import { Container, ProfileHeader, ProfileInfo, ProfileSocials, Social } from "./styles";

export function Profile () {
    return (
        <Container>
            <ProfileHeader>
                <img src='/default-avatar.png' />
                <div>
                    <div>
                        <strong>The Octocat</strong>
                        <time>Joined 25 Jan 2011</time>
                    </div>

                    <a href="https://github.com/eduardogomesf" target='_blank'>@octocat</a>

                    <p>This profile has no bio</p>
                </div>
            </ProfileHeader>

            <ProfileInfo>
                <div>
                    <span>Repos</span>
                    <strong>8</strong>
                </div>

                <div>
                    <span>Followers</span>
                    <strong>3938</strong>
                </div>

                <div>
                    <span>Following</span>
                    <strong>9</strong>
                </div>
            </ProfileInfo>

            <ProfileSocials>
                <Social>
                    <MapPin weight="fill" />
                    <strong>San Francisco</strong>
                </Social>

                <Social isDisabled={true}>
                    <TwitterLogo weight="fill" />
                    <strong>Not available</strong>
                </Social>

                <Social>
                    <Link weight="fill" />
                    <a href="https://github.blog" target={'_blank'}>https://github.blog</a>
                </Social>

                <Social>
                    <Buildings weight="fill" />
                    <strong>@github</strong>
                </Social>
            </ProfileSocials>
        </Container>
    )
}
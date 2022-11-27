import { Buildings, Link, MapPin, TwitterLogo } from "phosphor-react";
import { User } from "../../App";
import { Container, ProfileHeader, ProfileInfo, ProfileSocials, Social } from "./styles";

type ProfileProps = {
    user: User
}

export function Profile ({ user }: ProfileProps) {
    const notAvailableMessage = 'Not available'

    const hasTwitter = !!user?.socials?.twitterUsername
    const hasBlog = !!user?.socials?.blog

    const date = user.createdAt ? new Date(user.createdAt) : new Date()

    const formattedDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).format(date)

    return (
        <Container>
            <ProfileHeader>
                <img src={user.avatarUrl ? user.avatarUrl : '/default-avatar.png'} />
                <div>
                    <div>
                        <strong>{user.name ? user.name : notAvailableMessage}</strong>
                        <time>Joined {formattedDate}</time>
                    </div>

                    <a
                        href={user.profileUrl}
                        target='_blank'
                    >
                        @{user.username}
                    </a>

                    <p>{user.bio ? user.bio : 'This profile has no bio'}</p>
                </div>
            </ProfileHeader>

            <ProfileInfo>
                <div>
                    <span>Repos</span>
                    <strong>{user.totalOfRepos}</strong>
                </div>

                <div>
                    <span>Followers</span>
                    <strong>{user.totalOfFollowers}</strong>
                </div>

                <div>
                    <span>Following</span>
                    <strong>{user.totalOfFollowings}</strong>
                </div>
            </ProfileInfo>

            <ProfileSocials>
                <Social isDisabled={!user.location}>
                    <MapPin weight="fill" />
                    <strong>
                        {user.location ? user.location : notAvailableMessage}
                    </strong>
                </Social>

                <Social isDisabled={!hasTwitter}>
                    <TwitterLogo weight="fill" />
                    <a
                        href={hasTwitter ? `www.twitter.com/${user.socials.twitterUsername}` : '#'}
                        target='_blank'
                    >
                        {hasTwitter ? user.socials.twitterUsername : notAvailableMessage}
                    </a>
                </Social>

                <Social isDisabled={!hasBlog}>
                    <Link weight="fill" />
                    <a
                        href={hasBlog ? user.socials.blog : '#'}
                        target={'_blank'}
                    >
                        {hasBlog ? 'My blog' : notAvailableMessage}
                    </a>
                </Social>

                <Social isDisabled={!user.company}>
                    <Buildings weight="fill" />
                    <strong>{user.company ? user.company : notAvailableMessage}</strong>
                </Social>
            </ProfileSocials>
        </Container>
    )
}
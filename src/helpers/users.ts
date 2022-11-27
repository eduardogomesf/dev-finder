export function mapUserFromGithub (rawUser: any) {
    return {
        name: rawUser.name,
        bio: rawUser.bio,
        avatarUrl: rawUser.avatar_url,
        company: rawUser.company,
        createdAt: rawUser.created_at,
        location: rawUser.location,
        profileUrl: rawUser.html_url,
        totalOfFollowers: rawUser.followers,
        totalOfFollowings: rawUser.following,
        totalOfRepos: rawUser.public_repos,
        username: rawUser.login,
        socials: {
            blog: rawUser.blog,
            twitterUsername: rawUser.twitter_username
        }
    }
}
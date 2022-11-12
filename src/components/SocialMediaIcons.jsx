

const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-25 transition duration-500"
                href="https://www.linkedin.com/in/jlx012"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="linkedin-link" src="../assets/linkedin.png" />
            </a>
            <a
                className="hover:opacity-25 transition duration-500"
                href="https://www.github.com/jlx012"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="github-link" src="../assets/github.png" />
            </a>
            <a
                className="hover:opacity-25 transition duration-500"
                href="https://www.instagram.com/jlx012"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="instagram-link" src="../assets/instagram.png" />
            </a>
        </div>
    )
}

export default SocialMediaIcons;
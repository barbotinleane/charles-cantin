import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
    accessToken: "BozJNZtri90z669hbCEQ8Att",
    cache: {
        clear: "auto",
        type: "memory",
    },
});

export default Storyblok;

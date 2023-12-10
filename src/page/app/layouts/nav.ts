export const navItem = [
    {
        id: "1",
        content: "Home"
    },
    {
        id: "2",
        content: "Resources"
    },
    {
        id: "3",
        content: "About",

    },
    {
        id: "4",
        content: "Contact"
    }
]

export const itemVariants = {
    closed: {
        opacity: 0
    },
    open: { opacity: 1 }
};

export const sideVariants = {
    closed: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
        }
    },
    open: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1
        }
    }
};

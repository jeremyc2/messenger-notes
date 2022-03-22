const avatars: string[] = [
        "antelope", "bat", "bear", 
        "beaver", "bison", "black-panther", 
        "buffalo", "wild-boar"],
    colors: string[] = [
        "red", "pink", "grape", 
        "violet", "indigo", "blue", 
        "cyan", "teal", "green", 
        "lime", "yellow", "orange"]

export function getRandomAvatar() {
    const index = Math.random() * avatars.length
    return avatars[index]
}

export function getRandomColor() {
    const index = Math.random() * colors.length
    return colors[index]
}
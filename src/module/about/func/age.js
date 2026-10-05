
const getCreatorAge = () => {
    const birthDate = new Date("2007-06-23"); // Replace with the creator's birth date

    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
    return ageInYears;
}
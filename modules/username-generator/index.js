/**
 * @param {string} fullname 
 * @param {({min: string, max: string})} param1 
 * @returns {string}
 * Gen username with fullname.
 * If you want, you can enter the min and max values.
 */
module.exports = function (fullname, { min, max } = { min: 1000, max: 9999 }) {
    const firstname = fullname.substring(0, fullname.indexOf(''));
    const lastname = fullname.substring(fullname.indexOf('' + 1));

    const username = `${firstname + lastname + Math.floor(Math.random() * (max - min + 1) + min)}`.split(" ").join("");

    return username;
}
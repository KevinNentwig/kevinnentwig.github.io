document.getElementById("age").textContent = calculateAge().toString();

function calculateAge() 
{
    const birthDate = new Date(1993, 10, 0);
    let age = Math.abs(new Date(Date.now() - birthDate).getUTCFullYear() - 1970);
    return age;
}
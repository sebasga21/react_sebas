let balls = [
    {
        id: 1,
        nombre: "Ball1",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football.png",
        precio: "19,99 €",
        marca:"Adidas"
    },
    {
        id: 2,
        nombre: "Ball2",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football.png",
        precio: "14,99 €",
        marca:"Adidas"
    },
    {
        id: 3,
        nombre: "Ball3",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football.png",
        precio: "24,99 €",
        marca:"Adidas"
    },
    {
        id: 4,
        nombre: "Ball4",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football.png",
        precio: "19,99 €",
        marca:"Adidas"
    },
    {
        id: 5,
        nombre: "Ball5",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football.png",
        precio: "9,99 €",
        marca:"Adidas"
    },
    {
        id: 6,
        nombre: "Ball6",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football.png",
        precio: "14,99 €",
        marca:"Adidas"
    },
    {
        id: 7,
        nombre: "Ball7",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football.png",
        precio: "19,99 €",
        marca:"Adidas"
    },
    {
        id: 8,
        nombre: "Ball8",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football.png",
        precio: "29,99 €",
        marca:"Adidas"
    },
    {
        id: 9,
        nombre: "Ball9",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football.png",
        precio: "19,99 €",
        marca:"Adidas"
    },
];

export function getAllBalls()
{
    return balls;
}

export function getBall(id) 
{
    return balls.find((ball) => ball.id === id);    
}
let shirts = [
    {
        id: 1,
        nombre: "Ball1",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football-jersey.png",
        precio: "69,99 €",
        marca:"Adidas"
    },
    {
        id: 2,
        nombre: "Ball2",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football-jersey.png",
        precio: "79,99 €",
        marca:"Adidas"
    },
    {
        id: 3,
        nombre: "Ball3",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football-jersey.png",
        precio: "89,99 €",
        marca:"Adidas"
    },
    {
        id: 4,
        nombre: "Ball4",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football-jersey.png",
        precio: "99,99 €",
        marca:"Adidas"
    },
    {
        id: 5,
        nombre: "Ball5",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football-jersey.png",
        precio: "109,99 €",
        marca:"Adidas"
    },
    {
        id: 6,
        nombre: "Ball6",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football-jersey.png",
        precio: "59,99 €",
        marca:"Adidas"
    },
    {
        id: 7,
        nombre: "Ball7",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football-jersey.png",
        precio: "49,99 €",
        marca:"Adidas"
    },
    {
        id: 8,
        nombre: "Ball8",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football-jersey.png",
        precio: "69,99 €",
        marca:"Adidas"
    },
    {
        id: 9,
        nombre: "Ball9",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football-jersey.png",
        precio: "89,99 €",
        marca:"Adidas"
    },
];

export function getAllShirts()
{
    return shirts;
}

export function getShirt(id) 
{
    return shirts.find((shirt) => shirt.id === id);    
}
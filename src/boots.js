let boots = [
    {
        id: 1,
        nombre: "Ball1",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football-boots.png",
        precio: "99,99 €",
        marca:"Adidas"
    },
    {
        id: 2,
        nombre: "Ball2",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football-boots.png",
        precio: "120 €",
        marca:"Adidas"
    },
    {
        id: 3,
        nombre: "Ball3",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football-boots.png",
        precio: "69,99 €",
        marca:"Adidas"
    },
    {
        id: 4,
        nombre: "Ball4",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football-boots.png",
        precio: "49,99 €",
        marca:"Adidas"
    },
    {
        id: 5,
        nombre: "Ball5",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football-boots.png",
        precio: "19,99 €",
        marca:"Adidas"
    },
    {
        id: 6,
        nombre: "Ball6",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football-boots.png",
        precio: "35 €",
        marca:"Adidas"
    },
    {
        id: 7,
        nombre: "Ball7",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football-boots.png",
        precio: "199,99 €",
        marca:"Adidas"
    },
    {
        id: 8,
        nombre: "Ball8",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football-boots.png",
        precio: "250 €",
        marca:"Adidas"
    },
    {
        id: 9,
        nombre: "Ball9",
        bio: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        img: "../media/football-boots.png",
        precio: "199,99 €",
        marca:"Adidas"
    },
];

export function getAllBoots()
{
    return boots;
}

export function getBoot(id) 
{
    return boots.find((boot) => boot.id === id);    
}
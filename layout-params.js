/* ---------------------- Biciparqueadero -------------------------------------------- */
const biciparqueader = (data, TableName) => {

    const { name, location, contact, type, totalRacks, freeRacks, typeRack, photo, score, price, offer, services } = data;
    
    return {
      TableName,
      Item: {
        biciparqueaderoId: uuid.v1(),
        empresaBiciparqueaderoId: uuid.v1(),
        name,
        location,
        contact,
        type,
        totalRacks,
        freeRacks,
        typeRack,
        photo,
        score,
        price,
        offer,
        services,
        createdAt: Date.now(),
      },
    };
}

/* ---------------------- Biciusuario -------------------------------------------- */

const biciUsuario = (data, TableName) => {
    const {userId, name, email, phone, password, gender, institution} = data;

    return params = {
        TableName,
        Item: {
            userId,
            bikeId: uuid.v1(),
            name,
            email,
            phone,
            password,
            gender,
            institution,
            birthday: Date.now(),
            createdAt: Date.now(),
        },
    };
}

/* ---------------------- bicicleta -------------------------------------------- */

export const bicicleta = ( data, TableName ) => {
    const { userId, bikePhoto, propertyCard, color, tall, size, brand } = data;

    return params = {
        TableName,
        Item: {
            userId,
            bikeId: uuid.v1(),
            bikePhoto,
            propertyCard,
            color,
            tall,
            size,
            brand,
            createdAt: Date.now(),
        },
    };
}

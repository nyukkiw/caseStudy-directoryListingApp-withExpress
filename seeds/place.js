const mongoose = require('mongoose');
const Place = require('../models/place');

mongoose.connect('mongodb://127.0.0.1/bestpoints')
    .then((result) => {
        console.log('connected to mongodb')
    }).catch((err) => {
        console.log(err)
    });

async function seedPlaces() {
    const places = [
        {
            title: 'Taman Mini Indonesia Indah',
            price: 20000,
            description: 'Taman hiburan keluarga dengan berbagai replika bangunan dari seluruh Indonesia',
            location: 'Taman Mini Indonesia Indah, Jakarta',
            image: 'https://plus.unsplash.com/premium_photo-1661963646506-e822afdd50cb?q=80&w=1280&h=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Pantai Kuta',
            price: 0,
            description: 'Pantai yang terkenal di Bali dengan pemandangan sunset yang indah',
            location: 'Pantai Kuta, Kuta, Badung Regency, Bali',
            image: 'https://images.unsplash.com/photo-1663060096249-6097ca302389?q=80&w=1280&h=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Borobudur', 
            price: 0,
            description: 'Candi Buddha terbesar di dunia yang terletak di Magelang, Jawa Tengah',
            location: 'Borobudur, Magelang, Central Java',
            image: 'https://images.unsplash.com/photo-1637838827219-c1604c15a01c?q=80&w=1280&h=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Kawah Putih',
            price: 0,
            description: 'Kawah vulkanik dengan danau berwarna putih di Bandung, Jawa Barat',
            location: 'Kawah Putih, Ciwidey, West Java',
            image: 'https://images.unsplash.com/photo-1684189930003-9434c949925f?q=80&w=1280&h=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Malioboro',
            price: 0,
            description: 'Jalan utama di Yogyakarta dengan berbagai toko dan kuliner khas',
            location: 'Jl. Malioboro, Yogyakarta City, Special Region of Yogyakarta',
            image: 'https://images.unsplash.com/photo-1706865369220-246f8b3a93dd?q=80&w=1280&h=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Pantai Tanjung Aan',
            price: 10000,
            description: 'Pantai dengan pasir berwarna putih dan air laut yang jernih di Lombok, Nusa Tenggara Barat',
            location: 'Pantai Tanjung Aan, Lombok, West Nusa Tenggara',
            image: 'https://images.unsplash.com/photo-1706766090854-89d88070c469?q=80&w=1280&h=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Bukit Bintang',
            price: 0,
            description: 'Kawasan perbelanjaan dan hiburan di Kuala Lumpur, Malaysia',
            location: 'Bukit Bintang, Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia',
            image: 'https://images.unsplash.com/photo-1598797246294-7620e33a632f?q=80&w=1280&h=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Candi Prambanan',
            price: 25000,
            description: 'Candi Hindu terbesar di Indonesia yang terletak di Yogyakarta',
            location: 'Candi Prambanan, Sleman, Special Region of Yogyakarta',
            image: 'https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?q=80&w=1280&h=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Danau Toba',
            price: 0,
            description: 'Danau vulkanik terbesar di Indonesia yang terletak di Sumatera Utara',
            location: 'Danau Toba, North Sumatra',
            image: 'https://images.unsplash.com/photo-1601058497548-f247dfe349d6?q=80&w=1280&h=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Kawah Ijen',
            price: 100000,
            description: 'Kawah vulkanik dengan fenomena blue fire di Banyuwangi, Jawa Timur',
            location: 'Kawah Ijen, Banyuwangi, East Java',
             image: 'https://images.unsplash.com/photo-1581340151765-7ac189960bc9?q=80&w=1280&h=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Pantai Sanur',
            price: 0,
            description: 'Pantai di Bali yang cocok untuk berenang dan melihat matahari terbit',
            location: 'Pantai Sanur, Denpasar, Bali',
            image: 'https://images.unsplash.com/photo-1672567004357-7dd4f4ed8663?q=80&w=1280&h=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },

        {
            title: 'Candi Borobudur',
            price: 25000,
            description: 'Candi Buddha terbesar di dunia yang terletak di Magelang, Jawa Tengah',
            location: 'Candi Borobudur, Borobudur, Magelang, Central Java',
            image: 'https://images.unsplash.com/photo-1637838827219-c1604c15a01c?q=80&w=1280&h=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Pulau Komodo',
            price: 5000000,
            description: 'Pulau di Indonesia yang terkenal dengan komodo, hewan terbesar di dunia',
            location: 'Pulau Komodo, East Nusa Tenggara',
            image: 'https://images.unsplash.com/photo-1604560929658-bbc3c2ba6a36?q=80&w=1280&h=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Taman Nasional Gunung Rinjani',
            price: 150000,
            description: 'Taman nasional yang terletak di Lombok dan memiliki gunung tertinggi kedua di Indonesia',
            location: 'Taman Nasional Gunung Rinjani, Lombok, West Nusa Tenggara',
             image: 'https://images.unsplash.com/photo-1691217115286-12ecc43fb707?q=80&w=1280&h=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Bukit Tinggi',
            price: 0,
            description: 'Kota kecil yang terletak di Sumatera Barat dengan arsitektur khas Eropa',
            location: 'Bukit Tinggi, West Sumatra',
             image: 'https://images.unsplash.com/photo-1659120409096-92ac3c9ba940?q=80&w=1280&h=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Pulau Weh',
            price: 0,
            description: 'Pulau yang terletak di ujung barat Indonesia dengan keindahan bawah laut yang luar biasa',
            location: 'Pulau Weh, Sabang, Aceh',
             image: 'https://plus.unsplash.com/premium_photo-1668883189361-9c754861dbd6?q=80&w=1280&h=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Taman Safari Indonesia',
            price: 0,
            description: 'Taman hiburan keluarga dengan berbagai satwa liar di Cisarua, Bogor',
            location: 'Taman Safari Indonesia, Cisarua, West Java',
             image: 'https://plus.unsplash.com/premium_photo-1683134151922-dc3e89d5f583?q=80&w=1280&h=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Gunung Merbabu',
            price: 50000,
            description: 'Gunung yang terletak di Jawa Tengah dengan pemandangan matahari terbit yang indah',
            location: 'Gunung Merbabu, Central Java',
             image: 'https://images.unsplash.com/photo-1716712875891-c0cd2cc99f40?q=80&w=1280&h=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Pulau Lombok',
            price: 0,
            description: 'Pulau di Indonesia yang terkenal dengan keindahan pantainya',
            location: 'Pulau Lombok, West Nusa Tenggara',
             image: 'https://images.unsplash.com/photo-1741352541762-5aa06883da87?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Tanjung Lesung',
            price: 100000,
            description: 'Kawasan wisata pantai di Banten yang cocok untuk bersantai dan berenang',
            location: 'Tanjung Lesung, Pandeglang, Banten',
             image: 'https://images.unsplash.com/photo-1699718423866-bc3b02aac6b8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ]

    // const newPlace = await Promise.all(places.map(async (place) => {
    //     let geoData = await hereMaps.geometry(place.location);
    //     if (!geoData) {
    //         geoData = { type: 'Point', coordinates: [116.32883, -8.90952] }
    //     }
    //     return {
    //         ...place,
    //         author: '643d36579773b789e91ef660',
    //         images: {
    //             url: 'public\\images\\image-1681876521153-260851838.jpg',
    //             filename: 'image-1681876521153-260851838.jpg'
    //         },
    //         geometry: { ...geoData }
    //     }
    // }))

    try {
        await Place.deleteMany({});
        await Place.insertMany(places);
        console.log('Data berhasil disimpan');
    } catch (err) {
        console.log('Terjadi kesalahan saat menyimpan data:', err);
    } finally {
        mongoose.disconnect();
    }
}

seedPlaces();
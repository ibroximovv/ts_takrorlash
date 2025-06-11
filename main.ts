// 1

const speed: string | null = prompt('')
let point:number = 0

if( Number(speed) < 70) {
    alert('Hammasi ok')
} else if ( Number(speed) > 70) {
    point = + Math.floor((Number(speed) - 70) / 5)
    if (point > 12) {
        alert('Prava olindi')
    } else {
        alert(point)
    }
} else {
    alert('Xatolik')
}


// 2

// const prp: string | null = prompt('size?');
// let ismlar: string[] = [];

// if (prp !== null && !isNaN(Number(prp))) {
//     const soni = Number(prp);
//     for(let i = 0; i < soni; i++) {
//         const ism: string | null = prompt(`ismni kiriting:`);
//         if (ism !== null && ism.trim() !== '') {
//             ismlar.push(ism);
//         }
//     }
//     alert(`Kiritilgan ismlar: ${ismlar.join(', ')}`);
// } else {
//     alert('xatolik');
// }



// 3

// let data1 = [
//     {
//         title: "Najot Ta'lim",
//         address: "Tashkent",
//         children: [
//             {
//                 title: "AbuTech",
//                 address: "Tashkent",
//                 children: []
//             },
//             {
//                 title: "Robbit",
//                 address: "Samarqand",
//                 children: []
//             }
//         ]
//     },
//     {
//         title: "PDP",
//         address: "Sergili",
//         children: []
//     }
// ];

// function convertDataFormat(data: any[]): any[] {
//     return data.map(item => {
//         if (item.hasOwnProperty('title')) {
//             return {
//                 label: item.title,
//                 value: item.address,
//                 children: item.children.length > 0 ? convertDataFormat(item.children) : []
//             };
//         }
//         else if (item.hasOwnProperty('label')) {
//             return {
//                 title: item.label,
//                 address: item.value,
//                 children: item.children.length > 0 ? convertDataFormat(item.children) : []
//             };
//         }
//         else {
//             throw new Error('Nomalum malumot formati!');
//         }
//     });
// }

// console.log("Original data1:", data1);
// console.log("Data1 -> Data2:", convertDataFormat(data1));


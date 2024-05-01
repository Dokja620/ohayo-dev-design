// import { component$ } from '@builder.io/qwik';
// import type { DocumentHead } from "@builder.io/qwik-city";

// export default component$(() => {

//     // const titles = [
//     //     {
//     //         "title": [
//     //             "Développement Web",
//     //             "Hébergement",
//     //             "Front-End",
//     //             "Back-End",
//     //             "UI/UX Design",
//     //             "Rédaction Web",
//     //             "Logiciel",
//     //             "Publications",
//     //             "SEO"
//     //         ]
//     //     }
//     // ]

//     return (
//         <section id="pubs" class="container">
//             <h1>Publications</h1>
//             <div class="card-swiper">
//                 <div class="card-groups">
//                     <div class="card-group" data-index="1">
//                         <div class="little-card card">

//                         </div>
//                         <div class="big-card card">

//                         </div>
//                         <div class="little-card card">

//                         </div>
//                         <div class="big-card card">

//                         </div>
//                         <div class="little-card card">

//                         </div>
//                         <div class="big-card card">

//                         </div>
//                         <div class="little-card card">

//                         </div>
//                         <div class="big-card card">

//                             <div class="title">
//                                 <h2>Front-End</h2>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// });


// export const head: DocumentHead = {
//     title: "Ohayo Dev & Design - Nos Publication",
//     meta: [
//         {
//             name: "description",
//             content: "Homepage ohayo dev & design",
//         },
//     ],
// };

import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    const titles = [
        "Développement Web",
        "Hébergement",
        "Front-End",
        "Back-End",
        "UI/UX Design",
        "Rédaction Web",
        "Logiciel",
        "Publications",
        "SEO"
    ];

    return (
        <section id="pubs" class="container">
            <h1>Voici nos publications :</h1>
                    <div class="card-swiper">
                {titles.map((title, index) => (
                            <div key={title} class="card-group" data-index={index + 1}>
                                <div class="little-card card">

                                </div>
                                <div class="big-card card">

                                </div>
                                <div class="little-card card">

                                </div>
                                <div class="big-card card">

                                </div>
                                <div class="little-card card">

                                </div>
                                <div class="big-card card">

                                </div>
                                <div class="little-card card">

                                </div>
                                <div class="big-card card">

                                </div>
                                    <div class="title">
                                        <p>{title}</p>
                                    </div>
                            </div>
                ))}
                    </div>
        </section>
    );
});

export const head: DocumentHead = {
    title: "Ohayo Dev & Design - Nos Publications",
    meta: [
        {
            name: "description",
            content: "Homepage ohayo dev & design",
        },
    ],
};
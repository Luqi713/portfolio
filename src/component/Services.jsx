import React from 'react';

const services = [
    { title: 'UI/UX Design', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: 'https://www.shutterstock.com/image-vector/initial-letter-ux-logo-lowercase-260nw-1033319803.jpg' },
    { title: 'Web Development', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: 'https://thumbs.dreamstime.com/b/web-development-icon-trendy-flat-vector-white-background-programming-collection-illustration-can-be-use-mobile-eps-130326341.jpg' },
    { title: 'Graphic Design', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdkYkknBJf2061B4tvgUK65buy9JdraQIla8kmyH_c_g&s' },
    { title: 'Branding', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: 'https://images-platform.99static.com//5izzx5mICDKM8GVjq-fDbXrLqyU=/482x1354:1119x1991/fit-in/500x500/99designs-contests-attachments/124/124405/attachment_124405286' },
    { title: 'Marketing', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: 'https://static.vecteezy.com/system/resources/previews/008/109/007/non_2x/abstract-initial-letter-t-and-e-in-black-and-blue-color-isolated-in-white-background-applied-for-digital-marketing-company-logo-also-suitable-for-the-brand-or-company-that-has-initial-name-te-or-et-vector.jpg' },
    { title: 'Mobile App Design', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: 'https://cdn-icons-png.freepik.com/512/5738/5738077.png' },
    { title: 'Desktop Application', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: 'https://embed-ssl.wistia.com/deliveries/e18045eef2016ceda9ee57967fa95791.webp?image_crop_resized=1280x720' },
    { title: 'IT Consultancy', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: 'https://static.vecteezy.com/system/resources/previews/014/074/620/original/investment-consulting-company-logo-with-illustration-of-a-light-bulb-and-two-arrows-on-white-background-free-vector.jpg' }
];

const ServiceCard = ({ title, description, image }) => (
    <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg text-center">
        <img src={image} alt={title} className="mx-auto mb-4" style={{height:"150px"}}/>
        <h3 className="text-lg font-semibold mb-2 text-teal-600">{title}</h3>
        <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
);

const Services = () => (
    <div className="container mx-auto p-4">
        <h2 className="text-center text-2xl font-bold mb-8">What I Do?</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
                <ServiceCard key={index} title={service.title} description={service.description} image={service.image} />
            ))}
        </div>
    </div>
);

export default Services;

/*
In the code above:
- The `services` array holds the data for each service card.
- The `ServiceCard` component represents each individual service card.
- The `Services` component renders the main container, heading, and grid layout, and maps over the `services` array to render each `ServiceCard`.
- Tailwind CSS classes that are repeated multiple times are not extracted into a shared constant for brevity.*/
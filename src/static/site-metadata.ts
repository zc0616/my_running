interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Yolo\'s Running',
  siteUrl: 'https://zc0616.github.io/my_running/',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://github.com/zc0616/cong616',
    },
    {
      name: 'About',
      url: 'https://github.com/zc0616/my_running',
    },
  ],
};

export default data;

const images = [
  {
    id: 1,
    img: 'https://i.pinimg.com/236x/18/23/ef/1823eff56f73e2833d7b420c6d38da93.jpg',
    name: 'John',
    email: 'john@example.gmail.com',
    Mob: 123456780,
  },
  {
    id: 2,
    img: 'https://i.pinimg.com/236x/65/e3/a4/65e3a4fae8e8ed0a3a0ff4c8ea2b9ea5.jpg',
    name: 'Jane',
    email: 'jane@example.gmail.com',
    Mob: 123456780,
  },
  {
    id: 3,
    img: 'https://i.pinimg.com/236x/00/91/e1/0091e1e11bd9c7981f7da9d71022a62e.jpg',
    name: 'Jane',
    email: 'jane@example.gmail.com',
    Mob: 123456780,
  },
  {
    id: 4,
    img: 'https://i.pinimg.com/236x/46/ec/61/46ec617efc8111b9f5d696046c5493ef.jpg',
    name: 'Jane',
    email: 'jane@example.gmail.com',
    Mob: 123456780,
  },
  {
    id: 5,
    img: 'https://i.pinimg.com/236x/30/15/8e/30158ec4b20e2cd2fe7b7ded5db09ea5.jpg',
    name: 'Jane',
    email: 'jane@example.gmail.com',
    Mob: 123456780,
  },
  {
    id: 1,
    img: 'https://i.pinimg.com/236x/18/23/ef/1823eff56f73e2833d7b420c6d38da93.jpg',
    name: 'John',
    email: 'john@example.gmail.com',
    Mob: 123456780,
  },
  {
    id: 2,
    img: 'https://i.pinimg.com/236x/65/e3/a4/65e3a4fae8e8ed0a3a0ff4c8ea2b9ea5.jpg',
    name: 'Jane',
    email: 'jane@example.gmail.com',
    Mob: 123456780,
  },
  {
    id: 3,
    img: 'https://i.pinimg.com/236x/00/91/e1/0091e1e11bd9c7981f7da9d71022a62e.jpg',
    name: 'Jane',
    email: 'jane@example.gmail.com',
    Mob: 123456780,
  },
  {
    id: 4,
    img: 'https://i.pinimg.com/236x/46/ec/61/46ec617efc8111b9f5d696046c5493ef.jpg',
    name: 'Jane',
    email: 'jane@example.gmail.com',
    Mob: 123456780,
  },
  {
    id: 5,
    img: 'https://i.pinimg.com/236x/30/15/8e/30158ec4b20e2cd2fe7b7ded5db09ea5.jpg',
    name: 'Jane',
    email: 'jane@example.gmail.com',
    Mob: 123456780,
  },
];

const container = document.querySelector('.content');

images.forEach((img) => {
  const photos = document.createElement('div');
  photos.innerHTML = `
     <div class="main">
        <img
          src="${img.img}"
          alt=""
        />
        <p>${img.name}</p>
        <p>${img.email}</p>
        <p>${img.Mob}</p>
      </div>
  `;
  container.appendChild(photos);
});

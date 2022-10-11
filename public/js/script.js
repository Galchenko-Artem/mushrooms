// ymaps.ready(init);


async function getMark(){
  const resul = await fetch('/',{
      method: 'POST',
      headers:{
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
  });
  const mushrooms = await resul.json()
ymaps.ready(() => {
  const myMap = new ymaps.Map("maps", {
      center:[55.943233465759036,37.26191203676665],
      zoom:9,
      controls: [
          'typeSelector',
          'fullscreenControl', 
        ]
  },{
      searchControlProvider: 'yandex#search',
  });
  mushrooms.forEach((mushroom) =>{
      const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
        );
        const geocode =  ymaps.geocode(mushroom.location);
        geocode.then((res)=>{
          const firstGeoObject = res.geoObjects.get(0);
          const coords = firstGeoObject.geometry.getCoordinates();
          const mark = new ymaps.Placemark(coords, {
            hintContent: mushroom.title,
          }, {
              iconLayout: 'default#imageWithContent',
              iconImageHref: '/img/grib.png',
              iconImageSize: [15, 15],
              iconImageOffset: [-24, -24],
              iconContentOffset: [15, 15],
              iconContentLayout: MyIconContentLayout,
          });
          mark.events.add('click', () => {
            window.location.assign(`descr/${tea.id}`);
          });
          myMap.geoObjects.add(mark);
        });
      });
    });
  }
  getMark()
    

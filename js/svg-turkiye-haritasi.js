/*! SVG Türkiye Haritası | MIT Lisans | dnomak.com */

function svgturkiyeharitasi() {
  const element = document.querySelector('#svg-turkiye-haritasi');
  const info = document.querySelector('.il-isimleri');
  const imge = document.querySelector('.imge');

  element.addEventListener(
    'mouseover',
    function (event) {
      if (event.target.tagName === 'path' && event.target.parentNode.id !== 'guney-kibris' && event.target.parentNode.className.baseVal === 'gdg') {
        imge.src ='./gdg-logo.png';
        info.innerHTML = [
          '<div>',
          event.target.parentNode.getAttribute('data-iladi'),
          '</div>',
        ].join('');
      }
    }
  );
  element.addEventListener(
    'mousemove',
    function (event) {
      imge.style.top = event.pageY + 32 + 'px';
      imge.style.left = event.pageX  + 'px';
      info.style.top = event.pageY + 25 + 'px';
      info.style.left = event.pageX +20+ 'px';
    }
  );

  element.addEventListener(
    'mouseout',
    function (event) {
      imge.src = '';
      info.innerHTML = '';
    }
  );

  element.addEventListener(
    'click',
    function (event) {
      if (event.target.tagName === 'path' && event.target.parentNode.className.baseVal === 'gdg') {
        const parent = event.target.parentNode;
        const id = parent.getAttribute('id');

        if (id === 'guney-kibris' ) {
          return;
        }
        window.location.href = (
          'https://www.google.com/search?q=gdg+'
          + id
          + ' meetup'
        );
      }
    }
  );
}

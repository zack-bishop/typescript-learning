import axios from 'axios';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'AIzaSyAVt5KyyqelXbj21WwMsBQqT-kclLs2W_c';


// https://www.google.com/maps/search/?api=1&parameters


function searchAddressHandler(event: Event) {
    event.preventDefault();

    const enteredAddress = addressInput.value;


    axios.get(`
    https://www.google.com/maps/search/?api=1&key=${GOOGLE_API_KEY}&address=${encodeURI(enteredAddress)}`,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            proxy: {
                host: '192.168.86.22',
                port: 8080
            }
        }
    ).then(response => {
        console.log(response);
    }).catch(err => {
        console.log(err)
    });
}

form.addEventListener('submit', searchAddressHandler)
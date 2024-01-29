import './bootstrap';
// inclusione del css nel progetto
import '~resources/scss/app.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

//process images con istruzione
import.meta.glob([
    '../img/**'
]);
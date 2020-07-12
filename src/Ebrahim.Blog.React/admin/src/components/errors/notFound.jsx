import React from 'react';
import bg from "../../media/erorr/bg1.jpg";
import '../../venders/error.rtl.css'

const NotFound = propt => {
    return (<div class="kt-grid__item kt-grid__item--fluid kt-grid  kt-error-v1" style={{ backgroundImage: `url(${bg})` }} >
            <div class="kt-error-v1__container">
                <h1 class="kt-error-v1__number">۴۰۴</h1>
                <p class="kt-error-v1__desc">شت! متاسفانه همچین صفحه‌ای ندارم. </p>
            </div>
    </div >);
}

export default NotFound
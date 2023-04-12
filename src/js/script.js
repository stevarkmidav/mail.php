window.addEventListener('DOMContentLoaded', () => {
    //forms
    //open and close forms
    const requestForm = document.querySelector(".form__request"),
        callForm = document.querySelector(".form__call"),
        questionsForm = document.querySelector(".form__questions"),
        modalRequestForm = document.querySelector(".modal__form_request"),
        modalCallForm = document.querySelector(".modal__form_call"),
        requestBtn = document.querySelector(".promo__btn"),
        callBtn = document.querySelector(".subheader__btn"),
        closeRequestBtn = document.querySelector(".form__request__btn"),
        closeCallBtn = document.querySelector(".form__call__btn");
    
    function openModal(open, modalFormOpen) {
        open.addEventListener("click", (e) => {
            e.preventDefault();
            modalFormOpen.style.display = "block";
        });
    };

    function closeModal(close, modalFormClose) {
        close.addEventListener("click", (e) => {
            e.preventDefault();
            modalFormClose.style.display = "none";
        });
    };

    openModal(requestBtn, modalRequestForm);
    openModal(callBtn, modalCallForm);
    closeModal(closeRequestBtn, modalRequestForm);
    closeModal(closeCallBtn, modalCallForm);


    //sending forms data
    function form(formType, modalClass, modalClassError, dataWay) {
    formType.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const formData = new FormData(formType);
        const xhr = new XMLHttpRequest(); 
        xhr.open('POST', dataWay); 
        xhr.send(formData); 

        formType.reset();

        xhr.addEventListener("load", function () {
            response(xhr.status);
        });

        function response(status) {
            if (status === 200) {
                result(modalClass);
            } else {
                result(modalClassError);
            }
        }

        function result(status) {
            const modal = document.querySelector(status);
            modal.style.display = 'block';

            setTimeout(function () {
                modal.style.display = 'none';
            }, 4000);
        }
        
    });     
};

    form(requestForm,
        '.modal__message__success',
        '.modal__message__error',
        'mailer/request.php'
    );
    form(callForm,
        '.modal__message__success',
        '.modal__message__error',
        'mailer/call.php'
    );
    form(questionsForm,
        '.modal__message__success',
        '.modal__message__error',
        'mailer/questionsquestions.php'
    );

    if (form) {
        closeModal(closeRequestBtn, modalRequestForm);
        closeModal(closeCallBtn, modalCallForm);
    }
})




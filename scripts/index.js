'use strict'

window.onload = () => {
    button.addEventListener('click', onSubmit);
}

function onSubmit() {
    const email = 'mailto:info@rockbotics.nl';
    const reference = encodeURIComponent(sender.value + ' - ' + subject.value);
    const body = encodeURIComponent(message.value);
    console.log(email + '?subject=' + reference + '+body=' + body);

    window.location.href = email + '?subject=' + reference + '&body=' + body;
}
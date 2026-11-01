let currentAlertTimeout; // Shared timeout to manage auto-dismiss
let isAnimating = false; // Flag to prevent overlapping animations

let alertTimout = 2500; // Default timeout for alert

function customAlert(msg) {
    const alertBox = document.getElementById('alert-div');
    const alertText = document.getElementById('alert-text');
    const alertClose = document.getElementById('alert-close');

    // If alert is showing, animate out first
    if (alertBox.classList.contains('alert-box-in') && !isAnimating) {
        isAnimating = true;
        alertBox.classList.remove('alert-box-in');
        alertBox.classList.add('alert-box-out');
        alertBox.addEventListener('transitionend', () => {
            alertBox.classList.remove('alert-box-out');
            isAnimating = false;
            showNewAlert(); // Show new alert after old is hidden
        }, { once: true });
    } else if (!isAnimating) {
        showNewAlert(); // No alert showing? Just show it
    }

    function showNewAlert() {
        // Clear any previous timeout
        clearTimeout(currentAlertTimeout);

        alertText.innerText = msg;
        alertBox.classList.add('alert-box-in');

        // Hover cancel auto-dismiss
        alertBox.addEventListener('mouseover', () => {
            clearTimeout(currentAlertTimeout);
        });

        alertBox.addEventListener('mouseout', () => {
            scheduleAutoDismiss();
        });

        // Replace old close button to prevent multiple listeners
        const newClose = alertClose.cloneNode(true);
        alertClose.parentNode.replaceChild(newClose, alertClose);

        newClose.addEventListener('click', () => {
            alertBox.classList.remove('alert-box-in');
            alertBox.classList.add('alert-box-out');
            alertBox.addEventListener('transitionend', () => {
                alertBox.classList.remove('alert-box-out');
            }, { once: true });
        });

        scheduleAutoDismiss();
    }

    function scheduleAutoDismiss() {
        clearTimeout(currentAlertTimeout);
        currentAlertTimeout = setTimeout(() => {
            alertBox.classList.remove('alert-box-in');
            alertBox.classList.add('alert-box-out');
            alertBox.addEventListener('transitionend', () => {
                alertBox.classList.remove('alert-box-out');
            }, { once: true });
        }, alertTimout);
    }
}

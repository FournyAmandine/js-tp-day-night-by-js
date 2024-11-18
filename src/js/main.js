




(function (){
    const modeSombre = {
        bodyElement: document.body.classList,
        tumblerElement: document.querySelector('.tumbler').classList,
        postElements: document.querySelectorAll('.post'),
        init() {
            document.querySelector('.tumbler__wrapper').addEventListener('click', () => {
                this.change();
            })
        },
        change() {
            if (this.bodyElement.contains('body--night-mode') && this.tumblerElement.contains('tumbler--night-mode')) {
                this.bodyElement.remove('body--night-mode');
                this.tumblerElement.remove('tumbler--night-mode');
                for (const postElement of this.postElements) {
                    postElement.classList.remove('post--night-mode');
                }
            } else {
                this.bodyElement.add('body--night-mode');
                this.tumblerElement.add('tumbler--night-mode');
                for (const postElement of this.postElements) {
                    postElement.classList.add('post--night-mode');
                }
            }

        }
    }

    modeSombre.init();
})();
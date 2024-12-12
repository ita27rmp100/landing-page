// course's tag
customElements.define('new-course',class extends HTMLElement{
    connectedCallback(){
        let title = this.getAttribute('title')
        let details = this.getAttribute('details')
        let src = this.getAttribute('src')
        let status = this.getAttribute('status')
        let link =  this.getAttribute('link')
        let btnStatus = this.getAttribute('btnstatus')
        this.innerHTML=`<div class="card mt-3 mb-3">
                            <img src="${src}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${details}</p>
                            <a href="${link}" class="btn btn-primary active btnLink" data-toggle="modal" data-target="#modal">${status}</a>
                            </div>
                        </div>`;
        this.setAttribute('class','col')
    }
})
// goal's tag
customElements.define('new-goal',class extends HTMLElement{
    connectedCallback(){
        let title = this.getAttribute('title')
        let details = this.getAttribute('details')
        this.innerHTML =`
                    <div class="card">
                        <div class="card-header">
                            <h5>${title}</h5>
                        </div>
                        <div class="card-body" style="text-align:justify">${details}</div>
                    </div>`
        this.setAttribute('class','col-lg m-3')
    }
})
// service's tag
customElements.define('new-service',class extends HTMLElement{
    connectedCallback(){
        let img = this.getAttribute('img')
        this.innerHTML = `
            <div class="card">
                <img src="./images/services/${img}" class="card-img-top" alt="...">
                <div class="card-body">
                <a href="${this.getAttribute('src')}" class="btn btn-primary social">اطلب الخدمة</a>
                </div>
            </div>`
        this.setAttribute('class','col m-2')
    }
})
// member's tag
customElements.define('new-member',class extends HTMLElement{
    connectedCallback(){
        let img = this.getAttribute('image');
        let name = this.getAttribute('name');
        let tasks = this.getAttribute('tasks');
        let cv_link = this.getAttribute('cvlink');
        this.innerHTML = `
            <div >
                <img class="card-img-top rounded-circle" style="width:250px;height:250px;" src="/images/members/${img}" alt="Card image cap">
                <div class="pt-3">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text">${tasks}</p>
                  <a href="${cv_link}" class="btn btn-primary" data-toggle="modal" data-target="#modal">سيرته الذاتية</a>
                </div>
            </div>`
        this.setAttribute('class','col m-2')
    }
})
// statistics 
customElements.define('new-ach',class extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<div class="card bg-transparent text-light stCard">
                            <div class="card-body">
                            <h3  id=${this.getAttribute('idCild')} >${this.getAttribute('value')}</h3>
                            <h6>${this.getAttribute('of')}</h6>
                            </div>
                        </div>`
        this.setAttribute('class','col m-3')
    }
})
// jQuery code
    // scrolling settings
$(window).scroll(
    function() {
        let height = $('body').css('height').replace('px','')
        let progress = (pageYOffset*150)/height
        $('#loading').attr('aria-valuenow',progress)
                    .css('width',`${progress}%`)
        if (pageYOffset>='300') {
            $('#arrow').fadeIn(1500)
        } else {
            $('#arrow').fadeOut(1500)
        }
        if (pageYOffset>='2350') {
            setTimeout(() => {
                $('id').fadeOut()
            }, 1000);
        }
    }
)
    // statistics counter
function counter(id) {
    let value = Number($(id).text())+1 , i = 0 , count
    console.log(value)
    $(id).text('0')
    count = setInterval(() => {
            $(id).text(`${i}`)
            i++
        },50)
    setTimeout(() => {
        clearInterval(count)
    },50*value);
}
counter('#students')
counter('#courses')
counter('#lectures')
counter('#consulting')
$(document).ready(
    function() {
        //  social media settings
        $('.social').attr({
            'data-toggle':'modal',
            'data-target':'#modal',
            'target':'_blank'
        }).addClass('btnLink');
        // statistics
        $('.status').slideDown()
        //  events
        $('.btnLink').click(
            function(params) {
                let link = $(this).attr('href')
                $('#confirm').click(function() {
                    $('#modal').modal('toggle')
                    window.location = link
                })
            }
        )
        $('#arrow').click(
            function() {
                window.location = '#'
            }
        )
        $('.chapter').addClass('pt-4 pb-4 h-75 text-center')
        $('label').addClass('p-1 ')
        // courses
        $('.headerCourse').fadeTo(500,1)
        $('body').fadeTo(5,1)
    }
)

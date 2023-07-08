// card's tag
customElements.define('add-card',class extends HTMLElement{
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
// jQuery code
    // scrolling settings
$(window).scroll(
    function() {
        let height = $('body').css('height').replace('px','')
        let progress = (pageYOffset*100)/height
        $('#loading').attr('aria-valuenow',progress)
                    .css('width',`${progress}%`)
        if (pageYOffset>='300') {
            $('#arrow').fadeIn(1500)
        } else {
            $('#arrow').fadeOut(1500)
        }
    }
)
$(document).ready(
    function() {
        //  social media settings
        $('.social').attr({
            'data-toggle':'modal',
            'data-target':'#modal',
            'target':'_blank'
        }).addClass('btnLink');
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
        $('#search').keyup(
            function(){
                let search = $(this).val()
                $('#list tr').filter(
                    function() {
                        let resualt = $(this).text().indexOf(search)
                        $(this).toggle($(this).text().indexOf(search) > -1)
                        console.log(`search : ${search}`,`resualt : ${resualt}`)
                    }
                )
            }
        )
        $('.chapter').addClass('pt-3 pb-3 text-center')
    }
)




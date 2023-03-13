$(document).ready(function () {
    
    function balootaAjax(submitData,onSuccess,container) {
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: window.wp_data.ajax_url,
            data: submitData,
            beforeSend: function (response) {
                // Add loader
                container.addClass('loading');
            },
            success: onSuccess
        });
    }

    // lang select
    $('#lang').on('change', function(){
        window.location.href = $(this).val();
    });

    // search form processed
    $searchForm = $('#searchForm');
    $searchForm.on('submit', function(e) {
        e.preventDefault();
        
        var container = $('.ajax_wrap'),
            btn = $('.more'),
            btnWrap = $('.btn-wrap');
        var submitData = $(this).serialize(),
            onSuccess = function(data) {
                // console.log('data', data)
                container.removeClass('loading');
                if (data.update == false) {
                }
                if (data.update == true) {
                    if(data.output_html) container.html(data.output_html)
                    if(data.output_btn) {
                        if(btnWrap) btnWrap.html(data.output_btn);
                    } else {
                        if(btn) btn.remove();
                    }
                }
            };
        balootaAjax(submitData, onSuccess, container);
    });

    // Load more ajax
    $('.btn-wrap').on('click', '.more', function(e){
        e.preventDefault();
        var container = $('.ajax_wrap'),
            post_type = $(this).data('post_type'),
            page = $(this)[0].getAttribute('data-page'),
            btn = $(this);
            if($('#searchForm')) var s = $('#searchForm input[type="search"]').val();
        var submitData = {
                action : 'ajax_load_more',
                post_type : post_type,
                page : page,
                s : s,
            },
            onSuccess = function(data) {
                console.log('data', data)
                container.removeClass('loading');
                if (data.update == false) {
                }
                if (data.update == true) {
                    if(data.output_html) $('.ajax_wrap > div:last-child').after(data.output_html)
                    if(data.remove_btn) {
                        btn.remove();
                    } else {
                        var pageNew = Number(page)+1;
                        btn.attr('data-page',pageNew);
                    }
                    if(container.hasClass('grid')) {
                        container.isotope('destroy');
                        container.isotope({
                            itemSelector: '.grid-item',
                            percentPosition: true,
                            masonry: {
                              columnWidth: '.grid-sizer'
                            }
                        });
                    }
                    
                }
            };
        balootaAjax(submitData, onSuccess, container);
    })

    // $searchForm.on('input', 'input[type="search"]', function(e){
    //     e.preventDefault();
    //     if($(this).val().length>3)
    //     $searchForm.submit();
    // });
    $searchForm.on('change', 'input[type="search"]', function(e){
        e.preventDefault();
        if($(this).val().length==0)
        $searchForm.submit();
    });
    $('.ajax_wrap').on('click','.return_article', function(e){
        e.preventDefault();
        if($searchForm.length>0){
            $searchForm.find('input[type="search"]').val('');
            $searchForm.submit();
        }
    })
    if($('input.autocomplete').length>0)
    $('input.autocomplete').autocomplete({
        data: autocomplete.data,
        onAutocomplete: function(e){
            $searchForm.submit();
        }
    });

    
});
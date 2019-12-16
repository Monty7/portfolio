    $('.txtonimgbtn-container').on('click', '.txtonimgbtn-item', function(e) {

        var modal_position = $('.custom_modal').offset();
        var block_clicked = $(e.currentTarget).attr('id');
        $('.custom_modal').show(); //removed animation timing
        $('span.fa-times').removeAttr('style');
        if ($(window).width() <= 675) {
            $('body').css({
                'overflow': 'hidden',
                'height': '100%'
            });

            $('div[class*="box_ip"]').css({
                'display': 'block'
            });

            $('div[class*="box_ip"]').append('<a class="close-icon close-content fa fa-times">&nbsp;</a>');
            $('div[class*="box_ip"]').append('<a class="close-content"><button type="button" class="close-content btn btn-primary btn-xs fa"> Close</button></a>');
        }

        $('.custom_modal').children().each(function(e) {

            if ($(this).attr('class') === block_clicked || $(this).hasClass('fa-times')) {

                /* $(this) represents the content in each block */
                $(this).show();
                if ($(window).width() <= 675) {

                    if ($(this).height() > $(window).height()) {
                        $(this).css({
                            'height': '100%'
                        }).scroll();
                    } else {
                        $(this).css({
                            'height': 'auto'
                        });
                    }

                        if ($(window).width() >= 675) {
                            $('.close-icon').hide();
                            $('button.close-content').css('display', 'none');
                        } else {
                            $('.close-icon').show();
                            $('button.close-content').css('display', 'block');
                        }

                }
            } else {
                $(this).hide();
            }
            $(this).find('.close-content').attr({
                'href': '#' + block_clicked
            });

        }) //closes each

    }) //closes click


                    $(window).resize(function() {
                        $('.custom_modal').children().each(function(e) {

                        var content_height_margin = $(this).height() + 43;
   
                        if (content_height_margin < $(window).height()) {
console.log('height should be auto');
                            $(this).css({
                                'height': 'auto'
                            });
                        } else {
console.log('height should be 100%');
                            $(this).css({
                                'height': '100%'
                            });
                        }
                       }) //closes each
                    }) // closes resize


    $('.txtonimgbtn-container').on('click', '.close-content', function(e) {

        $('.custom_modal').hide(500);

        $('div[class*="box_ip"]').find('.close-content').remove();
        $('div[class*="box_ip"]').css({
            'height': 'auto'
        });
        $('body').css({
            'overflow': 'auto'
        });

    }) //closes the close click


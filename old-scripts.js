function equalizeHeight(breakpoints)
    {
      var bpWidths = [];
    
      for(var breakpoint in breakpoints)
      {
        bpWidths.push( breakpoints[breakpoint] );
      }
    
      if( $('[data-equalize-row]').length > 0 )
      {
    
        $('[data-equalize-row]').each(function()
        {
    
          var maxHeight = 0;
    
          $(this).find('[data-equalize]').each(function() 
          {
    
            var runMethod = {
              all: true
            };
    
            for(var breakpoint in breakpoints)
            {
              runMethod[breakpoint] = false;
            }
                  
             
            $(this).height('auto');
    
            var eleHeight = $(this).outerHeight();
            var rules     = $(this).attr('data-equalize');
    
            if( rules !== '' )
            {
    
              var ruleArray = rules.split(',');
    
              for (var i = 0; i < ruleArray.length; i++) 
              {
                runMethod[ruleArray[i]] = true;
              }
    
              runMethod.all = false;
            }
            else
            {
              runMethod.all = true;
            }
    
            if( eleHeight > maxHeight )
            {
              maxHeight = eleHeight;
            }
    
            // Starts Index
            var index = 0;
            for ( var method in runMethod ) 
            {
    
              var $this   = runMethod;
    
              if( $this[method] === true )
              {
                $(this).addClass('equalizer-item equalizer-' + method);
              }
              else
              {
                $(this).removeClass('equalizer-' + method);
              }
    
              index++; // increment index
            }
    
    
          });
    
    
          var bpIndex = 0;
    
          for(var breakpoint in breakpoints)
          {
            var name     = breakpoint,
                bpClass  = '.equalizer-' + name, 
                minWidth = breakpoints[breakpoint] + 'px',
                maxWidth = ( bpWidths[bpIndex + 1] - 1 ) + 'px',
                mq       = '';
    
            if( ( bpWidths.length - 1 ) !== bpIndex )
            {
              mq   = window.matchMedia('(min-width: ' + minWidth + ') and (max-width: '+ maxWidth +')');
            }
            else
            {
              mq   = window.matchMedia('(min-width: ' + minWidth + ')');   
            }
    
    
            if( mq.matches )
            {
              var $bpElement = $(this).find( bpClass );
    
              $(this).find('.equalizer-item').height('auto');
    
              if( $bpElement.length )
              {
                $bpElement.outerHeight( maxHeight );
              }
              else
              {
                $(this).find('.equalizer-all').outerHeight( maxHeight );
              }
    
    
              // console.log('breakpoint class' + bpClass);
    
              break;
            }
    
            bpIndex++;
          }
    
          // console.log('equalizeHeight ran');
        }); 
      }
    }

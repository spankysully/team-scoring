$(document).ready(function(){
    $("section > div").click(function(e){
        $(".popup").hide();
        $("div").removeClass('active');
        $(this).addClass('active');
        $("#deviceType").html($(this).attr('class').split(' ')[0]);
        loadSettings($(this).parent().attr('id'), $(this).attr('data-channel'));
    });
});

function loadSettings(parent, trigger){
    $('aside ul').html('');
    console.log(`parent: ${parent}, channel: ${trigger}`)
    for (let [key, value] of Object.entries(settings[parent][trigger])) {
        //<li>Triggered by Player <span>OFF</span></li>
        $(`<li style="display: none;">${key}<span>${value}</span></li>`).appendTo('aside ul').slideDown('fast');
      }
}



const settings = {
    
    settings0 : {
        one:{
            'Activating Team': '1',
            'Time Can Trigger': '1',
            'Trigger When Receiving From':'CH 1',
            'When Triggered Transmit On':'CH 99',
        },
        two:{
            'Activating Team': '2',
            'Time Can Trigger': '1',
            'Trigger When Receiving From':'CH 1',
            'When Triggered Transmit On':'CH 99',
        },
        three:{
            'Activating Team': '3',
            'Time Can Trigger': '1',
            'Trigger When Receiving From':'CH 1',
            'When Triggered Transmit On':'CH 99',
        },
        four:{
            'Activating Team': '4',
            'Time Can Trigger': '1',
            'Trigger When Receiving From':'CH 1',
            'When Triggered Transmit On':'CH 99',
        },
        five:{
            'Activating Team': '5',
            'Time Can Trigger': '1',
            'Trigger When Receiving From':'CH 1',
            'When Triggered Transmit On':'CH 99',
        },
        six:{
            'Activating Team': '6',
            'Time Can Trigger': '1',
            'Trigger When Receiving From':'CH 1',
            'When Triggered Transmit On':'CH 99',
        },
        seven:{
            'Activating Team': '7',
            'Time Can Trigger': '1',
            'Trigger When Receiving From':'CH 1',
            'When Triggered Transmit On':'CH 99',
        },
        eight:{
            'Activating Team': '8',
            'Time Can Trigger': '1',
            'Trigger When Receiving From':'CH 1',
            'When Triggered Transmit On':'CH 99',
        }
    },

//TEAM COUNTING
settings1 : {
    one:{
        'Time Can Trigger': '1',
        'Disable When Receiving From':'CH 02',
        'Trigger When Receiving From':'CH 99',
        'When Triggered Transmit On':'CH 01',
    },
    two:{
        'Time Can Trigger': '2',
        'Transmit Every X Triggers': '2',
        'Disable When Receiving From': 'CH 03',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 02',
    },
    three:{
        'Time Can Trigger': '3',
        'Transmit Every X Triggers': '3',
        'Disable When Receiving From': 'CH 04',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 03',
    },
    four:{
        'Time Can Trigger': '4',
        'Transmit Every X Triggers': '4',
        'Disable When Receiving From': 'CH 05',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 04',
    },
    five:{
        'Time Can Trigger': '5',
        'Transmit Every X Triggers': '5',
        'Disable When Receiving From': 'CH 06',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 05',
    },
    six:{
        'Time Can Trigger': '6',
        'Transmit Every X Triggers': '6',
        'Disable When Receiving From': 'CH 07',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 06',
    },
    seven:{
        'Time Can Trigger': '7',
        'Transmit Every X Triggers': '7',
        'Disable When Receiving From': 'CH 08',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 07',
    },
    eight:{
        'Time Can Trigger': '8',
        'Transmit Every X Triggers': '8',
        'Disable When Receiving From': 'CH 09',
        'Trigger When Receiving From': 'CH 99',
        'When Triggered Transmit On': 'CH 08',
    },
    nine:{
        'Team': '1',
        'When Team Is Out Of Respawns Transmit On': 'CH 100'
    },
    ten:{
        'Team': '2',
        'When Team Is Out Of Respawns Transmit On': 'CH 100'
    },
    eleven:{
        'Team': '3',
        'When Team Is Out Of Respawns Transmit On': 'CH 100'
    },
    twelve:{
        'Team': '4',
        'When Team Is Out Of Respawns Transmit On': 'CH 100'
    },
    thirteen:{
        'Team': '5',
        'When Team Is Out Of Respawns Transmit On': 'CH 100'
    },
    fourteen:{
        'Team': '6',
        'When Team Is Out Of Respawns Transmit On': 'CH 100'
    },
    fiveteen:{
        'Team': '7',
        'When Team Is Out Of Respawns Transmit On': 'CH 100'
    },
    sixteen:{
        'Team': '8',
        'When Team Is Out Of Respawns Transmit On': 'CH 100'
    },
},

//SETTINGS VICTORY ROYALE
 settings2 : {
    two:{
        'Time Can Trigger': '1',
        'Transmit Every X Triggers': '1',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 02',
        'Disable When Receiving From': 'CH 03',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 09'
    },
    three:{
        'Time Can Trigger': '2',
        'Transmit Every X Triggers': '2',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 03',
        'Disable When Receiving From': 'CH 04',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 09'
    },
    four:{
        'Time Can Trigger': '3',
        'Transmit Every X Triggers': '3',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 04',
        'Disable When Receiving From': 'CH 05',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 09'
    },
    five:{
        'Time Can Trigger': '4',
        'Transmit Every X Triggers': '4',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 05',
        'Disable When Receiving From': 'CH 06',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 09'
    },
    six:{
        'Time Can Trigger': '5',
        'Transmit Every X Triggers': '5',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 06',
        'Disable When Receiving From': 'CH 07',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 09'
    },
    seven:{
        'Time Can Trigger': '6',
        'Transmit Every X Triggers': '6',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 07',
        'Disable When Receiving From': 'CH 08',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 09'
    },
    eight:{
        'Time Can Trigger': '7',
        'Transmit Every X Triggers': '7',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 08',
        'Disable When Receiving From': 'CH 09',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 09'
    },
     seventeen:{
        'Allow Weapon Fire': 'YES',
        'Zone Width': '100',
        'Zone Depth': '100',
        'Zone Height': '100',
        'Enabled At Game Start': 'NO',
        'Enable When Receiving From': 'CH 09',
        'On Player Entering Zone Transmit On': 'CH 15'
    },
    eighteen:{
        'Score Value': '3',
        'Activate When Receiving From': 'CH 15',
        'Transmit On Score': '3',
        'On Score Output On': 'CH 16'
    },
    nineteen:{
        'Message': 'Victory!: +3 Points',
        'Time From Round Start': 'OFF',
        'Display Time': '3 SECONDS',
        'Show When Receiving From': 'CH 09'
    },
    twenty:{
        'Delay': '2 SECONDS',
        'Trigger When Receiving From': 'CH 09',
        'When Triggered Transmit On': 'CH 16'
    },
    twentyone:{
        'End Round When Receiving From': 'CH 16'
    }
},

//SETTINGS Top 5
 settings3 : {
    six:{
        'Time Can Trigger': '1',
        'Transmit Every X Triggers': '1',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 06',
        'Disable When Receiving From': 'CH 07',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 18'
    },
    seven:{
        'Time Can Trigger': '2',
        'Transmit Every X Triggers': '2',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 07',
        'Disable When Receiving From': 'CH 08',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 18'
    },
    eight:{
        'Time Can Trigger': '3',
        'Transmit Every X Triggers': '3',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 08',
        'Disable When Receiving From': 'CH 09',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 18'
    },
    seventeen:{
        'Allow Weapon Fire': 'YES',
        'Zone Width': '100',
        'Zone Depth': '100',
        'Zone Height': '100',
        'Enabled At Game Start': 'NO',
        'Enable When Receiving From': 'CH 10',
        'Disable When Receiving From': 'CH 14',
        'On Player Entering Zone Transmit On': 'CH 12'
    },
    eighteen:{
        'Score Value': '1',
        'Activate When Receiving From': 'CH 12'
    },
    nineteen:{
        'Message': 'Top 5: +1 Point',
        'Message Recipient': 'Triggering Player',
        'Time From Round Start': 'OFF',
        'Display Time': '3 SECONDS',
        'Show When Receiving From': 'CH 10'
    },
    twenty:{
        'Delay': '1 SECOND',
        'Trigger When Receiving From': 'CH 10',
        'When Triggered Transmit On': 'CH 14'
    }
},

//SETTINGS TOP 3
 settings4 : {
   
    four:{
        'Time Can Trigger': '1',
        'Transmit Every X Triggers': '1',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 04',
        'Disable When Receiving From': 'CH 05',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 11'
    },
    five:{
        'Time Can Trigger': '2',
        'Transmit Every X Triggers': '2',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 05',
        'Disable When Receiving From': 'CH 06',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 11'
    },
    six:{
        'Time Can Trigger': '3',
        'Transmit Every X Triggers': '3',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 06',
        'Disable When Receiving From': 'CH 07',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 11'
    },
    seven:{
        'Time Can Trigger': '4',
        'Transmit Every X Triggers': '4',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 07',
        'Disable When Receiving From': 'CH 08',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 11'
    },
    eight:{
        'Time Can Trigger': '5',
        'Transmit Every X Triggers': '5',
        'Enabled On Game Start': 'DISABLED',
        'Enable When Receiving From': 'CH 08',
        'Disable When Receiving From': 'CH 09',
        'Trigger When Receiving From': 'CH 100',
        'When Triggered Transmit On': 'CH 11'
    },
    seventeen:{
        'Allow Weapon Fire': 'YES',
        'Zone Width': '100',
        'Zone Depth': '100',
        'Zone Height': '100',
        'Enabled At Game Start': 'NO',
        'Enable When Receiving From': 'CH 11',
        'Disable When Receiving From': 'CH 14',
        'On Player Entering Zone Transmit On': 'CH 13'
    },
    eighteen:{
        'Score Value': '1',
        'Activate When Receiving From': 'CH 13'
    },
    nineteen:{
        'Message': 'Top 3: +1 Point',
        'Message Recipient': 'Triggering Player',
        'Time From Round Start': 'OFF',
        'Display Time': '3 SECONDS',
        'Show When Receiving From': 'CH 11'
    },
    twenty:{
        'Delay': '1 SECOND',
        'Trigger When Receiving From': 'CH 11',
        'When Triggered Transmit On': 'CH 14'
    }
}
};


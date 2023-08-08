<img src="https://i.ibb.co/ysKnYHD/SS-Flippable-Cards.png" alt="SS-Flippable-Cards" style="width: 400px; height: auto;">
<br/>
<h1>SS Flippable Cards</h1>
<p>Easy to use flippable cards for React </p>
<br/>
<br/>
<h3>Usage</h3>
<br/>
The code to utilize the cards is very straight forward, you have your main container and then card items. Import the main class as below to get started:
<br/>
<br/>
<i>import SSP from '/ss-flippable-cards'</i>
<br/>
<br/>
<h4>Container</h4>
<i>&lt;SSPContainer/&gt;</i>
<br/>
<br/>
<b>Container Props</b>
<br/>
<br/>
<i>style</i> is used to add any inline styles to the container
<i>center</i> is used to center the items within the container **
<i>evenly</i> is used to space the items evenly within the container **
<i>between</i> is used to space-between the items within the container **
<br/>
**Only one of these should be used at a time, as they are different ways to format the item layout within the container.
<br/>
<br/>
<h4>Card Item</h4>
<br/>
<br/>
<i>&lt;SSPItem/&gt;</i>
<br/>
<br/>
<b>Card Item Sizing Props</b>
<br/>
<br/>
The items can be sized responsively just by adding some of the props below:
<br/>
<i>xs_1 | xs_2 | xs_3 | xs_4 | sm_1 | sm_2 | sm_3 | sm_4 | md_1 | md_2 | md_3 |
md_4 | lg_1 | lg_2 | lg_3 | lg_4 | xl_1 | xl_2 | xl_3 | xl_4 | xxl_1 | xxl_2 |
xxl_3 | xxl_4</i>
<br/>
<br/>
Each breakpoint can be used to give a responsive layout depending on the needs of your application. For instance:
<br/>
<i>&lt;SSPItem xs_4 md_1 /&gt;</i>
<br/>
In the above example the card will have a full width on XS screens, and one quarter of the width on MD screens.
<br/>
<br/>
<b>Card Item Sizing Breakpoints</b>
<br/>
<i>
XS: &lt;576px <br/>
SM: &gt;=576px <br/>
MD: &gt;=768px <br/>
LG: &gt;=992px <br/>
XL: &gt;=1200px <br/>
XXL: &gt;=1400px <br/>
</i>
<br/>
<br/>

<b>Card Item Props</b>
<br/>
<br/>
<i>style</i> is used for inline styling of the card (object) (*optional)
<i>card_front_url</i> is used to give the front facing image URL of the card (string)
<i>card_front_alt</i> is used to give the front facing image alt of the card (string) (*optional)
<i>card_back_url</i> is used to give the rear facing image URL of the card (string)
<i>try_button</i> is used to allow the use of the top button on the rear of the card (boolean) (*optional)
<i>try_it_link</i> is used to give a link for the top button on the rear of the card (string)
<i>try_text</i> is used to give the top button a different text other than "Try" if you wanted to use the button for something else (string) (*optional)
<i>repo_link</i> is used to give the bottom button a link that is on the back of the card (string)
<i>repo_text</i> is used to give the bottom button a different text other than "Repo" (string) (*optional)
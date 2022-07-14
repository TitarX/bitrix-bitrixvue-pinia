<?php
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("BitrixVue");
?>

<?php
\Bitrix\Main\UI\Extension::load("local.pinia");
?>

<div id="application">Приложение запустится через 5 секунд.</div>
<br>
<div>
    <div>Обновление счетчика из HTML:</div>
    <button onclick="counterStore().increaseCounter()">+1</button>
    <button onclick="counterStore().decreaseCounter()">-1</button>
    <button onclick="counterStore().resetCounter()">My Reset</button>
</div>

<script type="text/javascript">
const application = new BX.PiniaDemo('#application');

application.initStorageBeforeStartApplication();
const counterStore = application.getCounterStore();

setTimeout(() => {
    BX.Dom.clean();
    application.start();
}, 5000)
</script>

<?php require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>
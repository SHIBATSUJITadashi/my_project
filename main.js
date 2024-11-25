console.log("じゃばを追加したよ");
// ユーザーに日付を入力させる
const userDateInput = prompt("日付を入力してください（形式: YYYY-MM-DD）");

// 入力を日付オブジェクトに変換
const userDate = new Date(userDateInput);

// 入力が正しいかチェック
if (isNaN(userDate)) {
    console.error("正しい日付を入力してください。例: 2024-11-25");
} else {
    // その年の12月31日を取得
    const endOfYear = new Date(userDate.getFullYear(), 11, 31);

    // 残りの日数を計算
    const remainingDays = Math.ceil((endOfYear - userDate) / (1000 * 60 * 60 * 24));

    // 結果を表示
    console.log(`選択した日付: ${userDate.toISOString().split('T')[0]}`);
    console.log(`その日から今年の残り日数は ${remainingDays} 日です。`);
}


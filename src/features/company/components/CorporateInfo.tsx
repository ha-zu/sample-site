export default function CorporateInfo() {
  return (
    <div className="flex justify-center p-5">
      <table>
        <tbody className="align-top">
          <tr className="m-2">
            <th className="text-left text-slate-900 m-1 font-bold px-8 py-0">
              会社名
            </th>
            <td>xxxxxxxxxxx</td>
          </tr>
          <tr className="m-1">
            <th className="text-left text-slate-900 m-1 font-bold px-8 py-0">
              代表名
            </th>
            <td>田中太郎</td>
          </tr>
          <tr className="m-1">
            <th className="text-left text-slate-900 m-1 font-bold px-8 py-0">
              所在地
            </th>
            <td>100-0005 東京都千代田区丸の内１丁目</td>
          </tr>
          <tr className="m-1">
            <th className="text-left text-slate-900 m-1 font-bold px-8 py-0">
              設立
            </th>
            <td>2023年5月1日</td>
          </tr>
          <tr className="m-1">
            <th className="text-left text-slate-900 m-1 font-bold px-8 py-0">
              資本金
            </th>
            <td>10000</td>
          </tr>
          <tr className="m-1">
            <th className="text-left text-slate-900 m-1 font-bold px-8 py-0">
              事業内容
            </th>
            <td>
              ・人材紹介事業
              <br />
              ・キャリア支援事業
              <br />
              ・研修事業
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

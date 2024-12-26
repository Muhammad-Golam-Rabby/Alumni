export class ApiResponser {
  static success = (msg: string, result?: any) => {
    return new Response(
      JSON.stringify({
        success: true,
        msg: msg,
        result: result,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  };
  static error = (msg: string, result?: any, code?: number) => {
    return new Response(
      JSON.stringify({
        success: false,
        msg: msg,
        result: result,
      }),
      {
        status: code || 401,
        headers: { "Content-Type": "application/json" },
      }
    );
  };
}

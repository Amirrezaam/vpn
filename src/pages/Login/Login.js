import "./Login.css"

export default function Login() {
    return (
        <div class="form-box">
            <div class="form-content">
                <h4>Login</h4>
                <form action="">
                    <div class="input-box">
                        <input type="text" placeholder="Username" name="" id="username" />
                    </div>
                    <div class="input-box">
                        <input type="password" placeholder="Password" name="" id="password" />
                    </div>
                    <div class="form-btn">
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


    import './Footer.css'

    import React from 'react'
    
    function Footer() {
        return (
            <div>
                <div className="stay_in_touch container ml-auto mr-auto">
                    <div className="contact_description">
                        <h2>Stay in Touch</h2>
                        <p>Drop your email below to get updates from Huddle01 straight to your inbox</p>

                    </div>
                    <div>
                        <form className="form">
                            <input type="text" placeholder="Enter email" className="input"/>
                                <button type="submit" className="btn-subscribe">Subscribe</button>
                            
                        </form>
                    </div>
                </div>

                <div className="footer_m">
                    <img src="https://beta.huddle01.com/static/media/logo.cfd383f4.svg" alt="alt-text"></img>
                    <p style={{color:"#5f5f5f",fontWeight: "400",fontSize: "1.25rem",margin: ".5rem 0"}}>Copyright © Graphene 01, Inc. All rights reserved</p>
                
                <div className="landing__foot__icons" style={{display:"block"}}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtVbdbcIwED6bDMAGDRsQfh54ajpBuwGwARuQTEI6QdsJSl9BkHSDdILmHUH6HXKkNroEp5BPMpZP+Pt857tzFBlst1u/0+ks8zzvY9mlf0IptT6dTtFoNHo+r/lnt9sFmJZ0W4TD4TBQIJ9hsaIWAE8eNFyaUkvgkGvE3KeWwPepqV10RQGELa3bhZOt8R8fl6i01j2YIozMzH+5cMm5IOCb0AUCfwriXtkYx3EXl8qZOKNfaV4VIiYJMc/L3kA4kDZ4nscefFKphkQBkMx4hkgEAY+FOCyYM2RGJu2BBy4J6S6GiMkOh8N8MpmkZInNZtOHeFy2V3kQNiE/E2ntinbJyAVCDYFQPloLcAYhdKv9fn9H9gK+tYBBNhgMvsgC3CxxKLepwMJ02VqY7KkM6aVWsYTICxdRFTlO/l5H4Ai2FOMVG1NkRoIwfUgbIbwwlVv7OIl1UIiA4M1xnISrlL1AbbgQvcd4su3CLPBNVzyRl8APTkItgTuCPh6PIbWHSI/H4zXJbflaBPxloYoVP/5waVpVkZbIwJEgCYIi+34ATGDGNz/K05IAAAAASUVORK5CYII=" alt="twitter"></img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7VXdUYQwEE4CBWgHlCC/M7xhB1rB2cnlKtAO7uxAKxCf+ZES7ECemQH89gQHudwxBm588ZuBzH6EJN/uZpezDkmSRIZhrNu2vYJ5wTTBOY+bptl5nve4t+mVZZnEsGbLYuO6ruRY/A7Glp0BUHItIGml+PYAPsIo2QyQy0lBOyQRgwL+s3s7z/O3Li46KMWYwcnHAdYOOP1rKkgLqrY49TO5CaPFZuDARUtDqEikF++fI1yJRwohLsmu65pi9qRaS+WiSVRVZYdh+N7bQRAUGG6REC9wacSmFExhuPgQULIZc1oK0jS9QQLQ5SxxYtmXBdM0C1yuH3O1FMD39+wrfS1sJHvetu3yYC7TwCh1rVNztTb4Df43+PsNqBZ9sHkV8ySo4RTsTEA6x0J1vRfETvi+H7OZrfEI9iXkuxxT84ekVdeLdUG1qUApkY7jvBLxCYWygiQ7y9ArAAAAAElFTkSuQmCC" alt="linkedin"></img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIWSURBVHgBtVXbUcJAFL1ZMnzHDrQCCa8ZvgwVaAdgBWoFxgrUCggdaAXIL286oAPjL0/PYZKZzGZJGAbOzAKbzX2de89iSYThcOgVCoXX3W5XwtaRE2FZ1s92uw2q1Wp3v+fHeDz28fUq58VbpVLxLThvY9ORCwCVNBVKasmFQMptcO4ZzkKsD/KJNXddNzQ5mE6nDuxvsdrYtvVz9pMU7fSDzWbj1uv1GRuvlLqTDMDJHA39GgwGJWTcE21ATAECNOdxMpn0DlSXRIh3FkgiLJfLTfjioPjJF5RuAUqC0Wj0kEFdmMjeR/Yus2a1aGpfNzAFmGPdJp/BEXvhobIrLlIY9cfjFJJrUmnb9iw3gN5QOkeWTTglnR2sd/zeU4IA5LtzyJawJQco+wXTco3vXvysWCw+gxIGfUPmXpa9kmyEnCY4f9IPqJ9arfYjiZ6cEiCGYwgQHmOYFyCejq5+sFwuPzn7knMx5lZAuZMKcH2D7QeaHnB6Go3GAlPznmefCkD5J/fUA0W3Wq0cjOgLJuqRE2USom5LpJTMG3AfWamepBHznnKE9x/W6/WfbqcML96REgpJ0nDE4JxagQa+YdvKrYBZgoImxxMl36OikmSAiUB0/eiym5oC/Ip5EgJOD+WfdV2DllIktieTH+vIW/MkkDpFucvlEKhI7r6cH7zKu1a8i67dFkUkp4N/QDP0xGfj+eAfWuwyoVAD0XAAAAAASUVORK5CYII=" alt="instagram"></img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG7SURBVHgBtVXbdYJAEB1W/0MJluDzXztIB5IKtAOhg6SCYAd2EPPti3RAB8F/HrnD2eWsnCWiwD1Hd+8uzHBnZmctkjgcDvNer7fJsmwIatOTsCxrn6apP51Otznnv9Pp5GLYULvwJpOJa8G4A/JJHQBKFgKSltQROOQCMZ9TR+B89g2LOwyR4lDICX81GcBegDAEpTVHo3bf8FKE5Lzpa+fz+atC6RrV8q2ILJYbCMNLTvnBJEk8w3PheDwujB+PR1a5qeOAcZP42Wy2h7JQX4MiV+cylFTXAV0uF5t/iiPW7/o++I++XwXxz54NIytFUHJ8MlXyffAhVLxQAweMtZqMRiM2nqtAOHz8VlQD9xzYSF6RDyHEB5dmHMdX2bMaO2CjjpqzCjhYIDy1vr6WA65/7rQlJ3OqCVFhNNI59xQ15+aI/QE1cQB4+NIQoysdFir05oj5lZ5w4OL4cz8itAwPRvKLg1Wg7geqZWB0ZGWRfNZXH6SD74OstOaXeNHsuIJk9bDhHZnhlB38UoMr8h74wgmoI0DtXlR0yrbgC+6UZEhOC+Bi2VqKyfpePnKIDIhgI8Dpd9Vd8QeuAMUPQ7cNQQAAAABJRU5ErkJggg==" alt="medium"></img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEESURBVHgB7ZXNEYJADIWzCwVYAiXI3x0r0RLswLUStRM8M4Ad2AIF8OOL4zpclIhw4zsACy/JvOwyUfQiy7LEcZxD13VrLFc0EqVU2rbtOYqiy3PNlzzPDW4HmpZjGIZGIfkOixPNAJxsNCxtaSa45S56ngj1FbQGQRff9yv7Eh3oPgXwfrokBOK93bgfWGmpckTyJ2IHfYqiuMORJ9GKHfSRJmfUt01icJbVt+9D8aMcWMqy9IY0fxWo69ob0gy2yNJvlTSG+cvBUmAp8C5Q0Yy4GDg3yUz45exbkDfVTdMcaT7OOo7jFA+GpsfwDOn//jtY2qJlCY2Hx+pNa22CILjyiwczlG3mydx+agAAAABJRU5ErkJggg==" alt="facebook"></img>
                </div>
                </div>
                
            </div>
        )
    }
    
    export default Footer
    
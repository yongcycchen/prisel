import { client } from './Client';
import { Client, Messages, ResponseWrapper, LoginResponsePayload } from './packages/priselClient';
const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {
    @property(cc.Label)
    public label: cc.Label = null;

    @property(cc.Button)
    public loginButton: cc.Button = null;

    @property(cc.EditBox)
    public usernameInput: cc.EditBox = null;

    private client: Client;

    private some: string;

    public start() {
        // init logic
        client.connect().then(() => {
            this.client = client;
            this.loginButton.node.active = true;
            this.usernameInput.node.active = true;
            this.loginButton.node.on('click', this.handleLogin, this);
        });
    }

    private handleLogin(): void {
        this.client
            .request(Messages.getLogin(this.client.newId(), this.usernameInput.string))
            .then((loginResponse: ResponseWrapper<LoginResponsePayload>) => {
                if (loginResponse.ok()) {
                    this.label.string = loginResponse.payload.userId;
                    cc.director.loadScene('createOrJoinRoom');
                }
            });
    }
}
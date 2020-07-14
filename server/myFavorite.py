import pymysql
from flask import Flask, jsonify, request
# from flask_cors import CORS

# 数据库连接
db = pymysql.connect(host='localhost',user='root', password='123456',port=3306, db='myfavorite', charset='utf8')
cursor = db.cursor()

# 启动后端
app = Flask(__name__)
# CORS(app)
# CORS(app, supports_credentials=True)
# cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
# app.config['CORS_HEADERS'] = 'application/json'

# 测试
@app.route("/api/test")
def test():
    return 'hello world'
@app.route("/api/login/list", methods=['POST', 'GET'])
def api_login_list():
    cursor.execute('select id,username,role,ctime from login')
    data = cursor.fetchall()
    temp = {}
    result = []
    if (data != None):
        for i in data:
            temp["id"] = i[0]
            temp["username"] = i[1]
            temp["role"] = i[2]
            temp["ctime"] = i[3]
            result.append(temp.copy())
        print('xxx', len(data))
        return jsonify(result)
    else:
        print('result:null')
        return jsonify([])

# 查询用户信息
@app.route("/login/list", methods=['POST'])
def login_list():
    cursor.execute('select id,username,role,ctime from login')
    data = cursor.fetchall()
    temp = {}
    result = []
    if (data != None):
        for i in data:
            temp["id"] = i[0]
            temp["username"] = i[1]
            temp["role"] = i[2]
            temp["ctime"] = i[3]
            result.append(temp.copy())
        print('xxx', len(data))
        return jsonify(result)
    else:
        print('result:null')
        return jsonify([])

# 增加用户信息
@app.route("/login/add", methods=['POST'])
def login_add():
    username = request.form.get("username")
    password = request.form.get("password")
    role = request.form.get("role")
    if request.method == "POST":
        try:
            cursor.execute("insert into login(username, password,role) values(\""
            +str(username)+"\", \""+str(password)+"\", \""+str(role)+"\")")
            db.commit()
            print('add new user successfully!')
            return "1"
        except Exception as e:
            print('add new user failed', e)
            db.rollback()
            return "-1"

# 删除用户信息
@app.route("/login/del", methods=['POST'])
def login_del():
    id = request.form.get("id")
    if request.method == "POST":
        try:
            cursor.execute("delete from login where id= "+str(id))
            db.commit()
            print('del user successfully!')
            return "1"
        except Exception as e:
            print('del user failed', e)
            db.rollback()
            return "-1"

# 更新用户密码
@app.route("/login/update", methods=['POST'])
def login_update():
    id = request.form.get("id")
    password = request.form.get("password")
    if request.method == "POST":
        try:
            cursor.execute("update login set password="+ str(password) +" where id= "+str(id))
            db.commit()
            print('update user successfully!')
            return "1"
        except Exception as e:
            print('update user failed', e)
            db.rollback()
            return "-1"

if __name__ == '__main__':
    # app.run(host='0.0.0.0', port=5000)
    app.run()
    db.close()